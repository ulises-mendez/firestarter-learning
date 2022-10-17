import React from "react"
import Icon from '@/Components/Icon'

export default ({rate, ratings}) => {
    /*
    return(
        <div className='flex items-center'>
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star-middle' className='w-6 fill-orange mr-2' />
            <Icon name='star-line' className='w-6 fill-orange mr-2' />
            { ratings &&
                <p className="text-xs">{ratings} ratings</p>
            }
        </div>
    )*/

    if (rate === 5){
        return(
            <div className='flex items-center'>
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star' className='w-6 fill-orange mr-2' />
            { ratings &&
                <p className="text-xs">{ratings} ratings</p>
            }
        </div>
        )
    }

    if (rate > 4){
        return(
            <div className='flex items-center'>
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star-middle' className='w-6 fill-orange mr-2' />
            { ratings &&
                <p className="text-xs">{ratings} ratings</p>
            }
        </div>
        )
    }

    if (rate == 4){
        return(
            <div className='flex items-center'>
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star-line' className='w-6 fill-orange mr-2' />
            { ratings &&
                <p className="text-xs">{ratings} ratings</p>
            }
        </div>
        )
    }

    if (rate > 3){
        return(
            <div className='flex items-center'>
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star-middle' className='w-6 fill-orange mr-2' />
            <Icon name='star-line' className='w-6 fill-orange mr-2' />
            { ratings &&
                <p className="text-xs">{ratings} ratings</p>
            }
        </div>
        )
    }

    if (rate == 3){
        return(
            <div className='flex items-center'>
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star' className='w-6 fill-orange mr-2' />
            <Icon name='star-line' className='w-6 fill-orange mr-2' />
            <Icon name='star-line' className='w-6 fill-orange mr-2' />
            { ratings &&
                <p className="text-xs">{ratings} ratings</p>
            }
        </div>
        )
    }

    

    return null
}