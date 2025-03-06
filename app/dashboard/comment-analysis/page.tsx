import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommentAnalysis() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-black">Comment Analysis</h1>
      <p className="text-gray-700 mb-8">
        Analyze customer feedback and comments to gain valuable insights for your business.
      </p>

      <Card className="border-gray-200 mb-6">
        <CardHeader>
          <CardTitle>Sentiment Analysis</CardTitle>
          <CardDescription>Understand the sentiment behind customer comments</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            No comments analyzed yet. Import comments from your platforms to begin analysis.
          </p>
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Feedback Trends</CardTitle>
          <CardDescription>Identify common themes and trends in customer feedback</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            Start analyzing comments to discover trends and patterns in customer feedback.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

