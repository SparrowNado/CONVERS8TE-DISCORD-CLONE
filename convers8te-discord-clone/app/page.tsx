import { Button } from "@/components/ui/button";


export default function Home() {
  return (

    <div className="flex flex-col">
    //text-3xl makes the text larger while font-bold makes it bold

   <p className='text-3xl font-bold text-indigo-500'>Hello World</p>
   <Button variant="destructive" className="bg-indigo-500">
    Press Here
    </Button> 
   </div>
  )
}
