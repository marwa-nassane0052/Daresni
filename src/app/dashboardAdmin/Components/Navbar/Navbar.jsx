import SearchInput from '../SearchInput/SearchInput'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Navbar() {
    return (
        <nav className=" border-b-1 shadow-md bg-[#121212] p-2 flex items-center justify-between flex-wrap  w-full z-10 top-0">
        {/* Navbar content */}
      <div  className=" flex justify-center items-center" style={{marginLeft:'40%'}}>
        <SearchInput/>

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADsUlEQVR4nNWaW4hNURjHl9u4ZVxjMORalLeRPBCDqHlwGc0TJXLLNS/zhAeNojyKQhMPiiQKEfGEiBDGIOSaGGSMeHD56XP+h9XMnpk9Y6+xz792nfZZ6//71t5rrbO+tY5zgQQUAkeAT7qOAqNdLolMI97TUHZvsMsVkXkTphMWuK6TunfY5YrIdCX8pw8M0b2PLlcEvFbQhRENee3SLqADMA14qqBParzYdUr37LtioL1Lm4COwErgFfH1AlhudV0aBIwEbnkB3gUqgNnAQeAt8AY4AMwENgE3vPL2efj/bsREb5qtBkqAdjHrTgfuqO47YEL4iKMDGaWnbdoPdGuFRxdgnzzMa2SYaJse1NcUwIF/Gbj2BoFKeV1t00kAWC3wPXuqCfh1BqrkuSKZKJuHtgeeCDotQV8bM6ZHbfJWgFkC3g7gfVveM5L2joLtEGxjAO/N8t6etHcU7LJgUwN4F8v7YtLeUbCXgg0K4F0o7+dJe0fBvgjWJYB3V3l/Sdo7ak1l+haQ8U2MDi4gpIcgnwIy6sTo7gJC+gvyJiCjRox+LiBknCBVARn3xRjrAkJsGW46G5BxXozpLiBkhSD7AjIqxVjmAkJ2C7IuIGODGDtdQEg2s5sckDFFjOuhAAOAn5oe84JA3J8l/Wfgh82SIQDr9aSOJW7ekHVcrLUhMkLLyU1zEjWP5s3LTvOJ5ibAEi/pCb59A3TykrfFSW731Mp0QSKm8bgLxaz9500JoI83U52Ou9WThMhsSpwR22Lo01qjodpsMz0OuvZpPIZ+YqM9sCGtycvfeQPuv51pkEm2bLcGxTQrbsUyLyew7tQ3eLTNx9TX62YWW1mcSs9VYUuadszJbENZTKZncSpku9QYlzIBYxVbTZzCe1X4ATDepUTAeOChYtsTp0Jvb5f8d+6hc4xhbRKxJ2OKfc6Lx2Lr7VqQm2/zfgizeqXEZxdQDizSUYI9rSJghK4CPZB8zzNf9wq8ckWqWyKvcnmfjzg0qlVMPWI1ol6DegFLgUNeLt2WqhHbYujZ4gY0s5SfZOsfYKvGk/0R4IJOrbKnuV+BD8B3L6jvumffobI3VfeovCrkbYwBiQXeioZeUpDzmigzX2UuubSKv3tSvZpZv5nqXFrF367V6IC0vp7tWi6tAq4oyLlNlClVmcsurQLWKMjqqFlGs6D90JpWubQKyPPyl/tKWfN1lXqNuG5ZoEuzgEH1/hBQX9aIgS4XRObN2MmvnW7ZTGaXTc2rQr2JX4hW1wVW6gumAAAAAElFTkSuQmCC" style={{width: 20, height: 20 , marginLeft: 20,color: 'white'}}></img>
       
        <div className='bg-[#ece8f8] w-16 h-11 rounded-3xl flex  justify-center items-center absolute left-[90%]' >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
         
        </Avatar>
      </div>
      </div>
        
      </nav>
    )
}