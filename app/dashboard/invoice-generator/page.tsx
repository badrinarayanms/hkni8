import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InvoiceGenerator() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-10 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-white">Invoice Generator</h1>
      <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8">
        Create professional invoices quickly and easily with our invoice generator tool.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
         <Card className="border-[#0F172A] bg-[#020617] rounded-lg "style={{borderRadius:10}}>
          <CardHeader>
            <CardTitle className="text-xl text-white">Recent Invoices</CardTitle>
            <CardDescription>View and manage your recently created invoices</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-sm sm:text-base">
              No invoices created yet. Click the button below to create your first invoice.
            </p>
          </CardContent>
        </Card>

         <Card className="border-[#0F172A] bg-[#020617] rounded-lg "style={{borderRadius:10}}>
          <CardHeader>
            <CardTitle className="text-xl text-white">Invoice Templates</CardTitle>
            <CardDescription>Choose from a variety of professional invoice templates</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-sm sm:text-base">
              Select from our collection of templates to get started with your invoices.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

