import { Image, SafeAreaView } from "react-native"
import { Text } from "react-native"
import { View } from "react-native"
import { FUNDO, NEGRO, GRAY_DEFAULT, BASE, DEFAULT, LIGTH, SECUNDARY, GRAY_LIGTH, PRYMARY } from "../../configs"
import { ImageBackground } from "react-native"
import { Dimensions } from "react-native"
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native"
import { Nearest, menu, slide } from "../../data"
import { ScrollView } from "react-native"
import { BlurView } from "expo-blur"
const { width, height } = Dimensions.get('screen');
export const Home = () => {
    return (
        <SafeAreaView style={{ backgroundColor: NEGRO, }} >
            <StatusBar style="light" />

            <ScrollView>
                <ImageBackground source={FUNDO} style={{ width: width, height: height, backgroundColor: NEGRO, }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: DEFAULT * 2, paddingVertical: DEFAULT * 4 }}>
                        <Text style={{ fontWeight: '600', fontSize: DEFAULT * 4, color: LIGTH, width: 250 }}>Find Your Favorite Food</Text>
                        <View>

                            <TouchableOpacity style={{ backgroundColor: GRAY_DEFAULT, borderRadius: DEFAULT + 5, opacity: 0.5, overflow: 'hidden' }}>
                                <Ionicons name="notifications-outline" color={BASE} size={DEFAULT * 3} style={{ padding: DEFAULT }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{
                        height: 50, flexDirection: 'row', justifyContent: 'space-between',
                        alignItems: 'center', marginLeft: DEFAULT * 2, marginRight: DEFAULT * 1,
                        borderRadius: DEFAULT + 5,
                    }}>

                        <View style={{
                            backgroundColor: GRAY_DEFAULT, flexDirection: 'row',
                            alignItems: 'center', width: 280, height: 50, borderRadius: DEFAULT
                        }}>
                            <Ionicons name="search" color={LIGTH} size={DEFAULT * 3} style={{ padding: DEFAULT }} />
                            <TextInput placeholder="What do you want to ordeer?" placeholderTextColor={GRAY_LIGTH} style={{}} />
                        </View>

                        <TouchableOpacity style={{ backgroundColor: GRAY_DEFAULT, borderRadius: DEFAULT }} oM>
                            <Ionicons name="options" color={LIGTH} size={DEFAULT * 3} style={{ padding: DEFAULT }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', width: width, height: 170, padding: DEFAULT, borderRadius: DEFAULT, overflow: 'hidden', marginLeft: DEFAULT }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            {slide.map((dado) =>
                                <ImageBackground key={dado.id} source={dado.image} style={{ padding: DEFAULT, borderRadius: DEFAULT, overflow: 'hidden', width: 340, marginRight: DEFAULT * 2, height: 150 }}>
                                    <TouchableOpacity>
                                        <BlurView tint='dark' intensity={50} style={{ borderRadius: DEFAULT, overflow: 'hidden', padding: DEFAULT, marginTop: 80 }}>
                                            <Text style={{ color: BASE, fontSize: 20, textAlign: 'center', borderRadius: DEFAULT }}>{dado.discription}</Text>
                                        </BlurView>
                                    </TouchableOpacity>
                                </ImageBackground>
                            )}
                        </ScrollView>
                    </View>


                    <View style={{ marginLeft: DEFAULT * 2, marginRight: DEFAULT, flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ color: LIGTH, fontWeight: '700', fontSize: 20 }}>
                            Nearest Restaurant
                        </Text>
                        <Text style={{ color: BASE, fontWeight: '400', fontSize: 13 }}>
                            View More
                        </Text>
                    </View>
                    <View >
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {Nearest.map((data) =>
                                <TouchableOpacity key={data.id}>
                                    <View style={{
                                        width: 140, height: 160, backgroundColor: GRAY_DEFAULT,
                                        marginLeft: DEFAULT * 2, padding: DEFAULT, borderRadius: DEFAULT,
                                        marginTop: DEFAULT, justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <Image source={data.image} />
                                        <Text style={{ color: LIGTH, fontWeight: 'bold' }}>{data.name}</Text>
                                        <Text style={{ color: GRAY_LIGTH, }}>{data.min}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        </ScrollView>
                    </View>

                    <View style={{
                        marginLeft: DEFAULT * 2, marginRight: DEFAULT, marginTop: DEFAULT,
                        flexDirection: 'row', justifyContent: 'space-between'
                    }}>
                        <Text style={{ color: LIGTH, fontWeight: '700', fontSize: 20 }}>
                            Popular Menu
                        </Text>
                        <Text style={{ color: BASE, fontWeight: '400', fontSize: 13 }}>
                            View More
                        </Text>
                    </View>

                    <View style={{ marginTop: DEFAULT }}>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                            {menu.map((data) =>
                                <TouchableOpacity key={data.id} >
                                    <View style={{
                                        width: 330, height: 80, backgroundColor: PRYMARY,
                                        marginLeft: DEFAULT * 2, padding: DEFAULT, borderRadius: DEFAULT * 3,
                                        marginTop: DEFAULT, justifyContent: 'space-between',
                                        flexDirection: 'row', alignItems: 'center'
                                    }}>
                                        <Image source={data.image} style={{ width: 110, height: 150, borderRadius: DEFAULT * 2, overflow: 'hidden' }} />
                                        <View >
                                            <Text style={{ color: LIGTH, fontWeight: 'bold' }}>{data.name}</Text>
                                            <Text style={{ color: BASE, }}>{data.price}.MZN</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        </ScrollView>
                    </View>

                </ImageBackground>
            </ScrollView>

        </SafeAreaView >

    )
}