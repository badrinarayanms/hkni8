import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CompetitorAnalysis() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-black">Competitor Analysis</h1>
      <p className="text-gray-700 mb-8">
        Gain insights into your competitors' strategies and market positioning with our analysis tools.
      </p>

      <Card className="border-gray-200 mb-6">
        <CardHeader>
          <CardTitle>Competitor Tracking</CardTitle>
          <CardDescription>Monitor your competitors' online presence and activities</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">No competitors added yet. Add your first competitor to start tracking.</p>
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Market Comparison</CardTitle>
          <CardDescription>Compare your business against competitors in key metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">Add your business data and competitors to generate comparative analysis.</p>
        </CardContent>
      </Card>
    </div>
  )
}

