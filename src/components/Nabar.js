
import { Link,} from "react-router-dom";


export const Navbar = () => {
  return (
    <div className="navbar">
      
        <>
          <Link style={{margin:"10px"}}  to="/">Home</Link>
          <Link style={{margin:"10px"}}  to="/tab1">Tab1</Link>
          <Link style={{margin:"10px"}}  to="/tab2">Tab2</Link>
          <Link style={{margin:"10px"}}  to="/tab3">Tab3</Link>
          <Link style={{margin:"10px"}}  to="/tab4">Tab4</Link>
          <Link style={{margin:"10px"}}  to="/tab5">Tab5</Link>
          
          
        </>
      
    </div>
  );
};

// AS LONG AS WE ARE LOGGED IN WE WANT TO HAVE ACCESS_TOKEN TO CONFIRM THAT WE AFE LOGGEN IN.
