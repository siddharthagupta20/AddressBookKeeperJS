class PersonContact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.firstName =firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip =zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    
    toString(){
        return "first name: "+this.firstName+", last name: "+this.lastName+", address: "+this.address+", city: "+this.city+
            ", state: "+this.state+", zip: "+this.zip+", phone number: "+this.phoneNumber+", email: "+this.email;
    }
}

let contact = new PersonContact("John","Doe","Hno-1/10","NY","nystate","111111","1111111111","jhonnyboi@gmail.com");
console.log(contact);
