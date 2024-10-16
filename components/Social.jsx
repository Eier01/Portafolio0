import Link from "next/link"
import {FaGithub,FaInstagram,FaYoutube} from "react-icons/fa"


const socials = [
    {icon: <FaGithub/>, path:"https://github.com/Eier01"},
    {icon: <FaInstagram/>, path:""},
]

const Social = ({containerStyles, iconStyles}) => {
    return (  
        <div className={containerStyles}>
            {socials.map((item, index) =>{
                return(
                    <Link key={index} href={item.path} className={iconStyles} target="_blank">
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    );
}

export default Social;