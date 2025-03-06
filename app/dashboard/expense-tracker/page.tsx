import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExpenseTracker() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-black">Expense Tracker</h1>
      <p className="text-gray-700 mb-8">
        Monitor and manage your business expenses with our comprehensive expense tracking tool.
      </p>

      <Card className="border-gray-200 mb-6">
        <CardHeader>
          <CardTitle>Expense Summary</CardTitle>
          <CardDescription>Overview of your recent expenses</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            No expenses recorded yet. Start tracking your business expenses to see a summary here.
          </p>
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Expense Categories</CardTitle>
          <CardDescription>Organize your expenses by category</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            Set up expense categories to better organize and analyze your business spending.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

