
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
function Faq(){
    return(<div>
      <h1 className="text-3xl dark:text-white mt-5 lg:text-7xl text-black font-extrabold  flex lg:px-10">-- FRENQUENTLY ASKED QUESTION --</h1>
        <Accordion type="multiple" collapsible className="px-20 mx-10 my-10">
  <AccordionItem value="item-1">
    <AccordionTrigger>IS IT FREE TO APPLY FOR ANY JOB?</AccordionTrigger>
    <AccordionContent>
      Yes. UPTO 10 JOB THEN YOU NEED PREMIUM SUSCRIPTION TO APPLY MORE.
    </AccordionContent>

  </AccordionItem> <AccordionItem value="item-2">
    <AccordionTrigger>RESPONSE TIME OF RESPONSE </AccordionTrigger>
    <AccordionContent>
      USUALLY WITHIN 1-2 DAYS .
    </AccordionContent>
  </AccordionItem>
   <AccordionItem value="item-3">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-4">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-5">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>

</Accordion>
</div>
       
    )
}

export default Faq