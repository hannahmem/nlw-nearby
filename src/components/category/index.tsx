import { Text, TouchableWithoutFeedbackProps, View } from "react-native";
import { TouchableWithoutFeedback } from "@gorhom/bottom-sheet";

import { s } from "./styles";
import { colors } from "@/styles/theme";
import { categoriesIcons } from "@/utils/categories-icons";

type Props = TouchableWithoutFeedbackProps & {
    name: string
    iconId: string
    isSelected?: boolean
}

export function Category({ name, iconId, isSelected = false, ...rest }: Props) {
    const Icon = categoriesIcons[iconId]
    return (
        <TouchableWithoutFeedback {...rest}> 
            <View style={[s.container, isSelected && s.containerSelected]}>
                <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
                <Text style={[s.name, isSelected && s.nameSelected]}>{name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}