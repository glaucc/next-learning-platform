import Image from "next/image"

export const Logo = () => {
    return (
        <Image 
            width={130}
            height={130}
            alt="Jofevn Learning Logo"
            src="/logo.svg"
        />
    )
}