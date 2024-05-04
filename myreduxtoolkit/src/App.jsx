import { GetComments } from "./Component/Ajax/GetComment";
import { GetDataFromStrore } from "./Component/Ajax/GetDataFromStrore";
import { GetPost } from "./Component/Ajax/GetPost";
import { GetUser } from "./Component/Ajax/GetUser";
import { ParentNamLoc } from "./Component/ParentNamLoc";

  
 export const App = () => {
   return (
     <div>
      {/* <ParentNamLoc/> */}
       {/* <GetComments/>
       <GetPost/>
       <GetDataFromStrore/> */}
       <GetUser/>
     </div>
   )
 }
 

 export default App;