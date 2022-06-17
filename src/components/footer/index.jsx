
import { ReactComponent as InstagramLogoSVG} from "../../assets/instagram.svg";
import { ReactComponent as VkLogoSVG} from "../../assets/vk.svg";


export const Footer = ({ fan }) => {
  return (
    <footer>
        <hr></hr>
        To contact with me
        <div className="almazzzz">
        <a href = "https://vk.com/bkulmukhambetov/"> <VkLogoSVG/> </a>
        <a href = "https://www.instagram.com/daestniknezanatyi/" style = {{position: "relative", left: "10px"}}> <InstagramLogoSVG /> </a>
        
        </div>
    </footer>
  );
};
