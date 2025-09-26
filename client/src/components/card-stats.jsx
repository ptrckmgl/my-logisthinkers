import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function CardStats() {
  return (
    <>
      <Card className="w-64 shadow-none bg-muted">
        <CardHeader className="px-8">
          <CardTitle className="mb-1 text-2xl font-bold tracking-tight">Placeholder</CardTitle>
          <CardDescription className="text-4xl text-black font-bold">5</CardDescription>
        </CardHeader>
        <CardContent className="mt-2 flex flex-row gap-2 px-8">
          <CardDescription>-15% Last Month</CardDescription>
        </CardContent>
      </Card>

      <Card className="w-64 shadow-none bg-muted">
        <CardHeader className="px-8">
          <CardTitle className="mb-1 text-2xl font-bold tracking-tight">Placeholder</CardTitle>
          <CardDescription className="text-4xl text-black font-bold">5</CardDescription>
        </CardHeader>
        <CardContent className="mt-2 flex flex-row gap-2 px-8">
          <CardDescription>-15% Last Month</CardDescription>
        </CardContent>
      </Card>

      <Card className="w-64 shadow-none bg-muted">
        <CardHeader className="px-8">
          <CardTitle className="mb-1 text-2xl font-bold tracking-tight">Placeholder</CardTitle>
          <CardDescription className="text-4xl text-black font-bold">5</CardDescription>
        </CardHeader>
        <CardContent className="mt-2 flex flex-row gap-2 px-8">
          <CardDescription>-15% Last Month</CardDescription>
        </CardContent>
      </Card>

      <Card className="w-64 shadow-none bg-muted">
        <CardHeader className="px-8">
          <CardTitle className="mb-1 text-2xl font-bold tracking-tight">Placeholder</CardTitle>
          <CardDescription className="text-4xl text-black font-bold">5</CardDescription>
        </CardHeader>
        <CardContent className="mt-2 flex flex-row gap-2 px-8">
          <CardDescription>-15% Last Month</CardDescription>
        </CardContent>
      </Card>
    </>
  );
}
