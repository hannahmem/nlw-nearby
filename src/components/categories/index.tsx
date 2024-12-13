import { FlatList } from "react-native";

import { Category } from "../category";

export type CategoriesProps = {
    id: string
    name: string
}[]
// colchetes usados para dizer que é uma lista de categorias, não só uma categoria

type Props = {
    data: CategoriesProps
}

export function Categories({ data }: Props) {
    console.log(data)
    return ( 
        <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Category name={item.name} iconId=""/>}
        />
    )
}