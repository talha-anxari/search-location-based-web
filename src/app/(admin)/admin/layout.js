// import Image from "next/image";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import Link from "next/link";
// import AreaChart from "./dashboard/page";
// import Dashboard from "./dashboard/page";

// export default function Layout({children}) {
//   return (
//     <html>
//         <body>
//     <Tabs defaultValue="dashboard" className="w-full">
//         <TabsList className='flex justify-center'>
//         <Link href={'dashboard'}>
//             <TabsTrigger value="dashboard">
//                 Dashboard
//             </TabsTrigger>
//         </Link>
//         <Link href={'users'}>
//             <TabsTrigger value="users">Users</TabsTrigger>
//         </Link>
//         <Link href={'events'}>
//             <TabsTrigger value="events">Events</TabsTrigger>
//         </Link>
//         <Link href={'categories'}>
//             <TabsTrigger value="categories">Categories</TabsTrigger>
//         </Link>
//         <Link href={'subcategories'}>
//             <TabsTrigger value="subcategories">Sub Categories</TabsTrigger>
//         </Link>
//         </TabsList>
//         <TabsContent value="dashboard">{children}</TabsContent>
//         <TabsContent value="users">{children}</TabsContent>
//         <TabsContent value="events">{children}</TabsContent>
//         <TabsContent value="categories">{children}</TabsContent>
//         <TabsContent value="subcategories">{children}</TabsContent>
//     </Tabs>
//         </body>
//     </html>
//   );
// }

// import React from 'react';
// import Image from "next/image";
// import Link from "next/link";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card } from "@/components/ui/card";
// import { Home, Users, Calendar, FolderTree, Layers } from "lucide-react";

// export default function Layout({ children }) {
//   const navItems = [
//     { value: "dashboard", label: "Dashboard", icon: Home, href: "dashboard" },
//     { value: "users", label: "Users", icon: Users, href: "users" },
//     { value: "events", label: "Events", icon: Calendar, href: "events" },
//     { value: "categories", label: "Categories", icon: FolderTree, href: "categories" },
//     { value: "subcategories", label: "Sub Categories", icon: Layers, href: "subcategories" },
//   ];

//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-gray-50 dark:bg-gray-900">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
//           <Card className="p-6 shadow-lg bg-white dark:bg-gray-800 rounded-xl">
//             <Tabs defaultValue="dashboard" className="w-full">
//               <TabsList className="flex justify-center p-1 bg-gray-100 dark:bg-gray-700 rounded-lg mb-6">
//                 {navItems.map((item) => (
//                   <Link key={item.value} href={item.href} className="flex-1">
//                     <TabsTrigger 
//                       value={item.value}
//                       className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-colors"
//                     >
//                       <item.icon className="w-4 h-4" />
//                       <span className="hidden sm:inline">{item.label}</span>
//                     </TabsTrigger>
//                   </Link>
//                 ))}
//               </TabsList>
              
//               {navItems.map((item) => (
//                 <TabsContent 
//                   key={item.value} 
//                   value={item.value}
//                   className="focus-visible:outline-none focus-visible:ring-0"
//                 >
//                   <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
//                     {children}
//                   </div>
//                 </TabsContent>
//               ))}
//             </Tabs>
//           </Card>
//         </div>
//       </body>
//     </html>
//   );
// }

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Home, Users, Calendar, FolderTree, Layers } from "lucide-react";

export default function Layout({ children }) {
  const navItems = [
    { value: "dashboard", label: "Dashboard", icon: Home, href: "dashboard" },
    { value: "users", label: "Users", icon: Users, href: "users" },
    { value: "events", label: "Events", icon: Calendar, href: "events" },
    { value: "categories", label: "Categories", icon: FolderTree, href: "categories" },
    { value: "subcategories", label: "Sub Categories", icon: Layers, href: "subcategories" },
  ];

  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <Card className="p-6 shadow-lg bg-white dark:bg-gray-800 rounded-xl sticky top-0 z-10">
            <Tabs defaultValue="dashboard" className="w-full">
              <TabsList className="flex justify-center p-1 bg-gray-100 dark:bg-gray-700 rounded-lg mb-6 sticky top-0 z-20">
                {navItems.map((item) => (
                  <Link key={item.value} href={item.href} className="flex-1">
                    <TabsTrigger 
                      value={item.value}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-colors"
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{item.label}</span>
                    </TabsTrigger>
                  </Link>
                ))}
              </TabsList>
              
              {navItems.map((item) => (
                <TabsContent 
                  key={item.value} 
                  value={item.value}
                  className="focus-visible:outline-none focus-visible:ring-0"
                >
                  <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
                    {children}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </Card>
        </div>
      </body>
    </html>
  );
}
