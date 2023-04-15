import {navigation} from "../data"

const NavMobile = () => {
  return (
    <div className="bg-white w-full h-full shadow-2xl">
        <ul className="text-center h-full flex flex-col items-center justify-center gap-y-6">
            {navigation.map((item, id) =>{
                return (
                    <li key={id}>
                        <a className="text-xl font-medium capitalize"
                        href={item.href}>{item.name}</a>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default NavMobile