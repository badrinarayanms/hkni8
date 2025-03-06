import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TalentStealing() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-black">Talent Stealing</h1>
      <p className="text-gray-700 mb-8">
        Identify and recruit top talent from your industry with our talent acquisition tools.
      </p>

      <Card className="border-gray-200 mb-6">
        <CardHeader>
          <CardTitle>Talent Pool</CardTitle>
          <CardDescription>Browse potential candidates for your business</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">No talent profiles created yet. Start by defining your talent requirements.</p>
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Recruitment Campaigns</CardTitle>
          <CardDescription>Create targeted campaigns to attract top talent</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            No recruitment campaigns active. Create your first campaign to start attracting talent.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

