import {Text, View, Button, TextInput, StyleSheet,} from 'react-native';
import React, { useState} from 'react';
import { Dropdown } from 'react-native-element-dropdown';
const cores = [
    {id: 1, nome: "Azul"},
    {id: 2, nome: "Vermelho"},
    {id: 3, nome: "Preto"},
    {id: 4, nome: "Roxo"},
    {id: 5, nome: "Rosa"},
    
]
interface Cor {
    id:number;
    nome:string
}
export default function Select (){
   const[ selectValue, setSelect] = useState<string | null>(null);
   const[cor, setValueCor] = useState<cor>();
}

                      


    )

}