import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "./ui/table";
import { ResponsiveLine } from "@nivo/line"; // Assuming @nivo/line is installed and works similarly with Vite

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Crypto Dashboard</h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <nav className="bg-gray-800 text-gray-400 p-6 w-64 flex flex-col gap-6">
          <a href="#" className="flex items-center gap-2 text-white font-medium">
            <LayoutGridIcon className="w-5 h-5" />
            Portfolio
          </a>
          <a href="#" className="flex items-center gap-2">
            <ClockIcon className="w-5 h-5" />
            Recent Transactions
          </a>
          <a href="#" className="flex items-center gap-2">
            <TrendingUpIcon className="w-5 h-5" />
            Crypto Prices
          </a>
          <a href="#" className="flex items-center gap-2">
            <BellIcon className="w-5 h-5" />
            Alerts
          </a>
        </nav>
        <div className="flex-1 p-8 bg-gray-100 dark:bg-gray-800">
          <div className="grid grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">$125,432.87</div>
                <p className="text-gray-500 dark:text-gray-400">+8.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total Gains</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">$32,987.54</div>
                <p className="text-gray-500 dark:text-gray-400">+15.3% from last month</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart className="aspect-[16/9]" />
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Top Gainers</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Coin</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Change</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <img src="/placeholder.svg" width="24" height="24" alt="Bitcoin" />
                          <span>Bitcoin</span>
                        </div>
                      </TableCell>
                      <TableCell>$56,789.12</TableCell>
                      <TableCell className="text-green-500">+2.5%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <img src="/placeholder.svg" width="24" height="24" alt="Ethereum" />
                          <span>Ethereum</span>
                        </div>
                      </TableCell>
                      <TableCell>$1,987.65</TableCell>
                      <TableCell className="text-green-500">+3.1%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <img src="/placeholder.svg" width="24" height="24" alt="Litecoin" />
                          <span>Litecoin</span>
                        </div>
                      </TableCell>
                      <TableCell>$234.56</TableCell>
                      <TableCell className="text-green-500">+1.8%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Coin</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2023-05-15</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <img src="/placeholder.svg" width="24" height="24" alt="Bitcoin" />
                          <span>Bitcoin</span>
                        </div>
                      </TableCell>
                      <TableCell>0.5 BTC</TableCell>
                      <TableCell className="text-green-500">Buy</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2023-05-12</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <img src="/placeholder.svg" width="24" height="24" alt="Ethereum" />
                          <span>Ethereum</span>
                        </div>
                      </TableCell>
                      <TableCell>2 ETH</TableCell>
                      <TableCell className="text-red-500">Sell</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2023-05-10</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <img src="/placeholder.svg" width="24" height="24" alt="Litecoin" />
                          <span>Litecoin</span>
                        </div>
                      </TableCell>
                      <TableCell>5 LTC</TableCell>
                      <TableCell className="text-green-500">Buy</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function LayoutGridIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function TrendingUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

