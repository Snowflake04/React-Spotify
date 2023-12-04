import SplashHeader from "./helpers/SplashHeader";
import ContentCards from "./helpers/ContentCards";
import Footer from "./helpers/Footer";

const MainPage = ({curatedList}) =>{
  console.log("main")
return(
<>
<SplashHeader />
{curatedList.map((selections) => {
              return (
                <ContentCards
                  selection={selections}
                  limit={5}
                  key={selections.id}
                />
              );
            })}
               <Footer />
</>
)
}
export default MainPage