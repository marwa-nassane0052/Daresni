import SearchInput from '../SearchInput/SearchInput'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Navbar() {
    return (
        <nav className=" border-b-1 shadow-md bg-white p-2 flex items-center justify-between flex-wrap  w-full z-10 top-0">
        {/* Navbar content */}
      <div  className=" flex justify-center items-center" style={{marginLeft:'40%'}}>
        <SearchInput/>

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADeklEQVR4nNWaS0hVQRzGf5rZi9RMepiFvaCgXRItjJ4UuOhJq4IoKqMnbVxVizAoaBkFFZGLoBApyCgKW1UUSYX2sKjoSVQWqZELLeNf343h4tVrnjn33A8GZJz5vu/MmZkz//9c8IcioBpoVakBppJmKAK+AF1xxerGkUaolvGLMm6lVnXnSCO0yrQ7+uNV9400wgeZtikW/yD2v8hjALAAeCXTtXoYK5dUZ/+bD2QSQWQBW4D33SzwROUtsFl9I4HJwAPH4EOgElgKnAE+AR+BKmAxsBe457S3vyem+iFmO9vsE6AMyEiy70KgUX2bgVmkCFM02mbkNDD0PzgGAyfFYVz2dkNf1HdloKqfC9fe4Clx3Ql7E9gm4cca1f5iEPBInOWEBBuxlxK1rTYo2JoxzudhvZUlEmzwwN0g7kWEgMMS2+OBe5+4DxECbklsngfu+eK+QQh4J7FCD9xF4n5DCPghsSB2q3gMEbdpeEWWhDo8anRIw75V3jBcIhZv+EKbNIZ51GCUROwQ6AufpVHgUYMZErGvsC80SWO6R40/x3ATuepRo04a9qX3hnKJ2InVF05JY5NHDY5JZKdHjd3SOOJR419kN8ejxlxp1PsSGA380vaY7UuEv0f678BP7ZKBY5dG6jz+cUFaO4ImHqCY3MiX4R8rnG0+0NhkgxP0hJG+GegEb+uDIrWEQItI1xAe1kqzJYikRL6zU13uQ6onCGQAV5zcl3n5L0xQss2IXvg++yRAgbS7lAOz/HGf4/JmZ8Gl8k6jSNmaWCLPvCWF1U5MYNNpJKnHSGeadchjr3ijDvsjljHPlCfz9jqZDrEpNY3oYbq8WczSK06o8VOghOigBHgmb8eT6TDCyZLHYg+7xygmfBRL+5rjp1Eek47NDzofwlh5r8DnKFABrNNVgo3WTGCSyhiJ5TicOaob47Sbqb5l4qoQd103l0Yt8mTe+ow8YCNw1omlwyyfpW0ecgn4KF+q888BrSf7IcB13VrFbnPbga9Ap2OqU3XtTibmvvrWiKtS3KXSShluyqSdXhNhldpY28iiTSZtSiZCvtpY28iiVSZ7WpC5IST5+o3bMrm8hzYr1cay+pHFdueGt7tdJk8fWmuzlQgj24lfmrToc1RWOg9Rrygw0iiM+0FAfLGHGEuaIFs3v7YObHeyYtutTScvb+I3s5wzY2t+2hoAAAAASUVORK5CYII=" style={{width: 20, height: 20 , marginLeft: 20}}></img>
       
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