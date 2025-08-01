import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
   PieChart,
   Pie,
   Cell,
   ResponsiveContainer,
   Tooltip,
   LineChart,
   Line,
   XAxis,
   YAxis,
   CartesianGrid,
} from 'recharts';
import { useCompletionAnalytics } from '@/hooks/useAnalyticsData';

interface CompletionAnalyticsProps {
   loading?: boolean;
}

export function CompletionAnalytics({ loading = false }: CompletionAnalyticsProps) {
   const { statusDistribution, completionTrends } = useCompletionAnalytics();

   if (loading) {
      return (
         <div className="grid gap-4 md:grid-cols-2">
            {Array.from({ length: 2 }).map((_, i) => (
               <Card key={i}>
                  <CardHeader>
                     <div className="h-5 bg-gray-200 rounded w-32 mb-2 animate-pulse" />
                     <div className="h-4 bg-gray-200 rounded w-48 animate-pulse" />
                  </CardHeader>
                  <CardContent>
                     <div className="h-48 bg-gray-200 rounded animate-pulse" />
                  </CardContent>
               </Card>
            ))}
         </div>
      );
   }

   return (
      <div className="grid gap-4 md:grid-cols-2">
         <Card>
            <CardHeader>
               <CardTitle>Status Distribution</CardTitle>
               <CardDescription>Current status breakdown of all tasks</CardDescription>
            </CardHeader>
            <CardContent>
               {statusDistribution.length > 0 ? (
                  <ResponsiveContainer width="100%" height={300}>
                     <PieChart>
                        <Pie
                           data={statusDistribution}
                           cx="50%"
                           cy="50%"
                           labelLine={false}
                           label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                           outerRadius={80}
                           fill="#8884d8"
                           dataKey="value"
                        >
                           {statusDistribution.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                           ))}
                        </Pie>
                        <Tooltip />
                     </PieChart>
                  </ResponsiveContainer>
               ) : (
                  <div className="flex items-center justify-center h-64 text-muted-foreground">
                     <p className="text-sm">No tasks found</p>
                  </div>
               )}
            </CardContent>
         </Card>

         <Card>
            <CardHeader>
               <CardTitle>Weekly Trends</CardTitle>
               <CardDescription>Task completion vs creation over time</CardDescription>
            </CardHeader>
            <CardContent>
               <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={completionTrends}>
                     <CartesianGrid strokeDasharray="3 3" />
                     <XAxis dataKey="date" />
                     <YAxis />
                     <Tooltip />
                     <Line
                        type="monotone"
                        dataKey="completed"
                        stroke="#00C49F"
                        strokeWidth={2}
                        name="Completed"
                     />
                     <Line
                        type="monotone"
                        dataKey="created"
                        stroke="#0088FE"
                        strokeWidth={2}
                        name="Created"
                     />
                  </LineChart>
               </ResponsiveContainer>
            </CardContent>
         </Card>
      </div>
   );
}
