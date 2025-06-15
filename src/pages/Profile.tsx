
import React, { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";

interface StudentProfile {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
}

const Profile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ first_name: "", last_name: "", phone: "" });
  const [hasChanges, setHasChanges] = useState(false);

  // Get student data for this user
  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);

    (async () => {
      try {
        const { data, error } = await supabase
          .from("students")
          .select("*")
          .eq("email", user.email)
          .maybeSingle();

        if (error || !data) {
          toast({
            title: "Profile Not Found",
            description: "We could not find your profile. Please contact support.",
            variant: "destructive",
          });
        }
        if (data) {
          setProfile(data);
          setForm({
            first_name: data.first_name,
            last_name: data.last_name,
            phone: data.phone || "",
          });
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [user, toast]);

  // Detect if form has unsaved changes
  useEffect(() => {
    if (!profile) return;
    setHasChanges(
      profile.first_name !== form.first_name ||
      profile.last_name !== form.last_name ||
      (profile.phone || "") !== form.phone
    );
  }, [form, profile]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;
    setSaving(true);
    // Update student profile in Supabase
    const { error } = await supabase
      .from("students")
      .update({
        first_name: form.first_name,
        last_name: form.last_name,
        phone: form.phone,
      })
      .eq("id", profile.id);

    setSaving(false);

    if (error) {
      toast({
        title: "Failed to Save",
        description: "Could not update your profile. Please try again.",
        variant: "destructive",
      });
    } else {
      setProfile({ ...profile, ...form });
      toast({
        title: "Profile Updated",
        description: "Your details have been updated successfully.",
      });
      setHasChanges(false);
    }
  };

  const handleCancel = () => {
    if (profile) {
      setForm({
        first_name: profile.first_name,
        last_name: profile.last_name,
        phone: profile.phone || "",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <span className="text-gray-500">Loading profile...</span>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Profile | Music Tutorship Academy Hub</title>
      </Helmet>
      <div className="min-h-[80vh] flex justify-center items-start pt-8 bg-gradient-to-br from-red-50 via-purple-50 to-pink-50">
        <Card className="w-full max-w-md mx-auto shadow-lg border border-gray-200 bg-white/80">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">My Profile</CardTitle>
            <div className="text-gray-500 text-sm mt-1">
              Update your personal details below.
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSave} className="space-y-6">
              <div>
                <label className="block mb-1 text-gray-600 font-medium" htmlFor="first_name">
                  First Name
                </label>
                <Input
                  id="first_name"
                  name="first_name"
                  required
                  value={form.first_name}
                  onChange={onChange}
                  autoComplete="given-name"
                  className="bg-white"
                  disabled={saving}
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-600 font-medium" htmlFor="last_name">
                  Last Name
                </label>
                <Input
                  id="last_name"
                  name="last_name"
                  required
                  value={form.last_name}
                  onChange={onChange}
                  autoComplete="family-name"
                  className="bg-white"
                  disabled={saving}
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-600 font-medium" htmlFor="email">
                  Email (cannot edit)
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={profile?.email || ""}
                  disabled
                  className="bg-gray-100 cursor-not-allowed"
                  autoComplete="email"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-600 font-medium" htmlFor="phone">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  autoComplete="tel"
                  className="bg-white"
                  disabled={saving}
                  maxLength={14}
                />
              </div>
              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={!hasChanges || saving}
                  className="flex-1"
                >
                  {saving ? "Saving..." : "Save Changes"}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleCancel}
                  disabled={saving || !hasChanges}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Profile;
