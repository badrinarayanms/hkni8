import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EmailAutomation() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4  mt-10 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-white">Email Automation</h1>
      <p className="text-sm sm:text-base text-center text-white mb-6 sm:mb-8">
        Streamline your communication with customers and prospects using our powerful email automation tools.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-[#0F172A] bg-[#020617] ">
        <Card className="border-[#0F172A] bg-[#020617] rounded-lg "style={{borderRadius:10}}>
          <CardHeader>
            <CardTitle className="text-xl text-white">Email Campaigns</CardTitle>
            <CardDescription>Create and manage email marketing campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-sm sm:text-base">
              No campaigns created yet. Click the button below to create your first email campaign.
            </p>
          </CardContent>
        </Card>

        <Card className="border-[#0F172A] bg-[#020617]" style={{borderRadius:10}}>
          <CardHeader>
            <CardTitle className="text-white">Automated Sequences</CardTitle>
            <CardDescription>Set up triggered email sequences based on customer actions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-sm sm:text-base">
              No automated sequences created yet. Get started by creating your first sequence.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}