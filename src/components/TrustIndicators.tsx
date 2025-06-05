
const TrustIndicators = () => {
  const indicators = [
    { value: "1000+", label: "Students Trained" },
    { value: "95%", label: "Success Rate" },
    { value: "24/7", label: "Support Available" },
    { value: "5★", label: "Average Rating" }
  ];

  return (
    <div className="mt-20 text-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {indicators.map((indicator, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">{indicator.value}</div>
            <div className="text-gray-600">{indicator.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustIndicators;
