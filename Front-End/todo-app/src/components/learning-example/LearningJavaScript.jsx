const person = {
    name: 'Vietnam - Vick7',
    address: {
        line1: '1.St',
        city: 'ThuDuc',
        country: "Vie",
    },
    profile: ['twitter', 'linkedin', 'instagram'],
    printProfile: () => {
        person.profile.map(
            (profile) => {
                console.log(profile)
            }
        )

    }
}

 
export default function LearningJavaScript(){
    return(
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profile[0]}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}