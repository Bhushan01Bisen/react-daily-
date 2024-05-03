import { GetComments } from "./Component/Ajax/GetComment";
import { GetPost } from "./Component/Ajax/GetPost";
import { ParentNamLoc } from "./Component/ParentNamLoc";

  
 export const App = () => {
   return (
     <div>
      {/* <ParentNamLoc/> */}
       {/* <GetComments/> */}
       <GetPost/>
     </div>
   )
 }
 

 export default App;