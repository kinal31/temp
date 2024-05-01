import React from 'react'
import {useNavigate} from 'react-router-dom'

const HomepageSection = () => {
    const navigate = useNavigate();
  return (
    <div>
      

<div class="grid gap-4 m-4">
    <div>
        <img class="h-auto mx-auto max-w-full rounded-lg" src="https://img.freepik.com/free-vector/flat-autumn-horizontal-sale-banner-template-with-photo_23-2149042343.jpg?w=900&t=st=1712901143~exp=1712901743~hmac=926efc09a6c87826262c6538684ea08cea8ef9124cd574682851bbe1df1938c7" alt="" width={1400} />
    </div>
    <div class="grid grid-cols-5 gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg cursor-pointer" src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05042024-trendscarousel-netplay-ts-starting249.jpg" alt="" onClick={()=> navigate(`/men/clothing/shirt`)}/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg cursor-pointer" src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05042024-trendscarousel-netplay-avaasa-min60.jpg" alt="" onClick={()=> navigate(`/men/clothing/tshirt`)} />
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg cursor-pointer" src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05042024-trendscarousel-leecooper-rio-upto70.jpg" alt="" onClick={()=> navigate(`/women/clothing/top`)}/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg cursor-pointer" src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05042024-trendscarousel-fig-dnmx-starting299.jpg" alt="" onClick={()=> navigate(`/men/clothing/men_jeans`)}/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg cursor-pointer" src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05042024-trendscarousel-avaasa-fusion-min50.jpg" alt="" onClick={()=> navigate(`/women/clothing/kurtas`)}/>
        </div>
    </div>
</div>

    </div>
  )
}

export default HomepageSection
