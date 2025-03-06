import React from 'react'

const Data = ({ onSave }) => {
      
    
      const [businessName, setBusinessName] = useState("");
      const [businessDescription, setBusinessDescription] = useState("");
      const [services, setServices] = useState([{ title: "", description: "" }]);
      const [contactInfo, setContactInfo] = useState(""); // New state for contact info
    
      // Function to add a new service field
      const addService = () => {
        setServices([...services, { title: "", description: "" }]);
      };
    
      // Function to handle changes in service fields
      const handleServiceChange = (index, field, value) => {
        const newServices = [...services];
        newServices[index][field] = value;
        setServices(newServices);
      };
    
      const handleSave = async () => {
        const businessData = {
          businessName,
          businessDescription,
          services,
          contact_info: contactInfo, // Include contact info in the data
        };
    
        const response = await fetch("/api/saveBusiness", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(businessData),
        });
    
        const result = await response.json();
        if (result.success) {
          onSave(businessName); // Pass the business name to the parent component
        }
      };
    
    
    
      return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-black">Business Launchpad</h1>
          <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8">
            Welcome to Business Launchpad, your all-in-one platform for launching and managing your business. Start by
            entering your business details below, then explore our suite of tools designed to help your business succeed.
          </p>
    
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
              <CardDescription>Enter the details about your business</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Business Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={businessData.name}
                    onChange={handleChange}
                    placeholder="Enter your business name"
                    className="border-gray-300 focus:border-black w-full"
                  />
                </div>
    
                <div className="sm:col-span-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Business Description
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    value={businessData.description}
                    onChange={handleChange}
                    placeholder="Describe your business"
                    className="border-gray-300 focus:border-black w-full"
                  />
                </div>
    
                <div className="sm:col-span-1">
                  <label htmlFor="serviceTitle" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Title
                  </label>
                  <Input
                    id="serviceTitle"
                    name="serviceTitle"
                    value={businessData.serviceTitle}
                    onChange={handleChange}
                    placeholder="Enter your main service title"
                    className="border-gray-300 focus:border-black w-full"
                  />
                </div>
    
                <div className="sm:col-span-1">
                  <label htmlFor="serviceDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Description
                  </label>
                  <Textarea
                    id="serviceDescription"
                    name="serviceDescription"
                    value={businessData.serviceDescription}
                    onChange={handleChange}
                    placeholder="Describe your main service"
                    className="border-gray-300 focus:border-black w-full h-full min-h-[80px]"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} className="bg-black hover:bg-gray-800 text-white">
                Save Business
              </Button>
            </CardFooter>
          </Card>
          <Toaster />
        </div>
      )
}

export default Data