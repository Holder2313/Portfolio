import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsProject({ contexte, approche }: { contexte: string; approche: string }) {
  return (
    <Tabs defaultValue="contexte" className=" w-[80%] mx-auto mt-20">
      <TabsList className=" flex justify-center bg-transparent">
        <TabsTrigger value="contexte">Contexte</TabsTrigger>
        <TabsTrigger value="approche">Approche</TabsTrigger>
      </TabsList>
      <TabsContent value="contexte">{contexte}</TabsContent>
      <TabsContent value="approche"> {approche} </TabsContent>
    </Tabs>
  );
}
