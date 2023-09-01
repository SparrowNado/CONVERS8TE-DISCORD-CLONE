import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs/app-beta";




export default function Home() {
  return (

    <div className="flex flex-col">

    
  <UserButton afterSignOutUrl="/"/>
   
    This page is protected Bro
   
   </div>
  )
}
