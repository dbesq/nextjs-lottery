import { useEffect } from 'react'
import { useMoralis } from 'react-moralis'

export default function ManualHeader() {

    const { account, deactivateWeb3, enableWeb3, isWeb3Enabled, isWeb3EnableLoading, Moralis } = useMoralis()

    // If not connected to wallet, prompt connection to wallet
    useEffect(() => {
        if(isWeb3Enabled) return
        if(window !== 'undefined') {
            if(window.localStorage.getItem('connected')) {
                enableWeb3()
            }
        }
    }, [isWeb3Enabled])

    //  
    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${account}`)
            if(account == null) {
                window.localStorage.removeItem('connected')
                deactivateWeb3()  // sets isWeb3Enabled to false
                console.log('Null account found')
            }
        })
    }, [])

    return (
        <div>
            {
                account
                    ?   (<div>Connected to { account.slice(0,6) }...{ account.slice(account.length - 4) }</div>)
                    :   (<button onClick={ async () => {                        
                                await enableWeb3()
                                if(window != 'undefined') {
                                    window.localStorage.setItem("connected", "injected")
                                }                            
                            }
                        }
                            disabled={ isWeb3EnableLoading }
                        >
                            Connect
                        </button>)
            }            
        </div>
    )
}