import { FlatList } from "react-native";

import { s } from "./styles";
import { Category } from "../category";

export type CategoriesProps = {
    id: string
    name: string
}[]
// colchetes usados para dizer que é uma lista de categorias, não só uma categoria

type Props = {
    data: CategoriesProps
    selected: string
    onSelect: (id: string) => void
}

export function Categories({ data, selected, onSelect }: Props) {
    console.log(data)
    return ( 
        <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => ( 
                <Category 
                    name={item.name} 
                    iconId={item.id} 
                    onPress={() => onSelect(item.id)}
                    isSelected={item.id === selected}
                    />
                )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={s.content}
            style={s.container}
        />
    )
}