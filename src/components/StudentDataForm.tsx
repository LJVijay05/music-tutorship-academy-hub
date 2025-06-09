import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { fetchCountries, fetchStates, fetchCities, Country, State, City, hasApiKey } from "@/utils/locationApi";
import ApiKeyManager from "@/components/ApiKeyManager";
import { Settings } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  country: z.string().min(1, "Please select your country"),
  state: z.string().min(1, "Please select your state"),
  city: z.string().min(1, "Please select your city"),
  pincode: z.string().min(4, "Pincode must be at least 4 characters"),
  gender: z.string().min(1, "Please select your gender"),
});

type FormData = z.infer<typeof formSchema>;

interface StudentDataFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

const StudentDataForm = ({ open, onOpenChange, onSuccess }: StudentDataFormProps) => {
  const { toast } = useToast();
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [isLoadingStates, setIsLoadingStates] = useState(false);
  const [isLoadingCities, setIsLoadingCities] = useState(false);
  const [isLoadingCountries, setIsLoadingCountries] = useState(false);
  const [showApiKeyManager, setShowApiKeyManager] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      country: '',
      state: '',
      city: '',
      pincode: '',
      gender: '',
    },
  });

  // Load countries on component mount
  useEffect(() => {
    const loadCountries = async () => {
      if (open) {
        if (!hasApiKey()) {
          setShowApiKeyManager(true);
          return;
        }

        setIsLoadingCountries(true);
        console.log('StudentDataForm: Loading countries...');
        try {
          const countriesData = await fetchCountries();
          console.log('StudentDataForm: Countries loaded:', countriesData);
          
          if (Array.isArray(countriesData)) {
            setCountries(countriesData);
          } else {
            console.error('StudentDataForm: Countries data is not an array:', countriesData);
            setCountries([]);
          }
        } catch (error) {
          console.error('StudentDataForm: Error loading countries:', error);
          setCountries([]);
        } finally {
          setIsLoadingCountries(false);
        }
      }
    };
    loadCountries();
  }, [open]);

  // Load states when country changes
  useEffect(() => {
    const loadStates = async () => {
      if (selectedCountry) {
        setIsLoadingStates(true);
        console.log('StudentDataForm: Loading states for country:', selectedCountry);
        try {
          const statesData = await fetchStates(selectedCountry);
          console.log('StudentDataForm: States loaded:', statesData);
          
          if (Array.isArray(statesData)) {
            setStates(statesData);
          } else {
            console.error('StudentDataForm: States data is not an array:', statesData);
            setStates([]);
          }
        } catch (error) {
          console.error('StudentDataForm: Error loading states:', error);
          setStates([]);
        } finally {
          setIsLoadingStates(false);
        }
        
        setCities([]); // Clear cities when country changes
        form.setValue('state', '');
        form.setValue('city', '');
      }
    };
    loadStates();
  }, [selectedCountry, form]);

  // Load cities when state changes
  useEffect(() => {
    const loadCities = async () => {
      if (selectedCountry && selectedState) {
        setIsLoadingCities(true);
        console.log('StudentDataForm: Loading cities for state:', selectedState);
        try {
          const citiesData = await fetchCities(selectedCountry, selectedState);
          console.log('StudentDataForm: Cities loaded:', citiesData);
          
          if (Array.isArray(citiesData)) {
            setCities(citiesData);
          } else {
            console.error('StudentDataForm: Cities data is not an array:', citiesData);
            setCities([]);
          }
        } catch (error) {
          console.error('StudentDataForm: Error loading cities:', error);
          setCities([]);
        } finally {
          setIsLoadingCities(false);
        }
        
        form.setValue('city', '');
      }
    };
    loadCities();
  }, [selectedCountry, selectedState, form]);

  const onSubmit = (data: FormData) => {
    console.log('StudentDataForm: Form submitted with data:', data);
    
    try {
      localStorage.setItem('studentData', JSON.stringify(data));
      console.log('StudentDataForm: Data stored in localStorage');
      
      toast({
        title: "Information Submitted Successfully!",
        description: "Your details have been saved.",
      });

      onOpenChange(false);
      
      setTimeout(() => {
        if (onSuccess) {
          console.log('StudentDataForm: Triggering success callback');
          onSuccess();
        }
      }, 300);
      
    } catch (error) {
      console.error('StudentDataForm: Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your information. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleApiKeySet = async () => {
    setIsLoadingCountries(true);
    try {
      const countriesData = await fetchCountries();
      if (Array.isArray(countriesData)) {
        setCountries(countriesData);
      }
    } catch (error) {
      console.error('Error loading countries after API key set:', error);
    } finally {
      setIsLoadingCountries(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-gray-900 mb-2">
              Student Information
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600 text-sm">
              Please fill in your details to proceed with enrollment
            </DialogDescription>
          </DialogHeader>

          {!hasApiKey() && (
            <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center justify-between">
                <p className="text-sm text-yellow-700">
                  API key required for location data
                </p>
                <Button
                  onClick={() => setShowApiKeyManager(true)}
                  variant="outline"
                  size="sm"
                  className="ml-2"
                >
                  <Settings className="w-4 h-4 mr-1" />
                  Set API Key
                </Button>
              </div>
            </div>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country *</FormLabel>
                      <Select 
                        onValueChange={(value) => {
                          field.onChange(value);
                          setSelectedCountry(value);
                        }} 
                        defaultValue={field.value}
                        disabled={isLoadingCountries}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={isLoadingCountries ? "Loading..." : "Select country"} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.isArray(countries) && countries.map((country) => (
                            <SelectItem key={country.iso2} value={country.iso2}>
                              {country.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                          <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State *</FormLabel>
                      <Select 
                        onValueChange={(value) => {
                          field.onChange(value);
                          setSelectedState(value);
                        }} 
                        defaultValue={field.value}
                        disabled={!selectedCountry || isLoadingStates}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={isLoadingStates ? "Loading..." : "Select state"} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.isArray(states) && states.map((state) => (
                            <SelectItem key={state.iso2} value={state.iso2}>
                              {state.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City *</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                        disabled={!selectedState || isLoadingCities}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={isLoadingCities ? "Loading..." : "Select city"} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.isArray(cities) && cities.map((city) => (
                            <SelectItem key={city.id} value={city.name}>
                              {city.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="pincode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pin Code *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter pin code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={form.formState.isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  {form.formState.isSubmitting ? "Submitting..." : "Continue to Enrollment"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <ApiKeyManager 
        open={showApiKeyManager}
        onOpenChange={setShowApiKeyManager}
        onApiKeySet={handleApiKeySet}
      />
    </>
  );
};

export default StudentDataForm;
