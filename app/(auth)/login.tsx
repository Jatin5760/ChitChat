import { COLORS } from '@/constants/theme'
import { styles } from '@/styles/auth.styles'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'

export default function Login() {
  return (
    <View style={styles.container}>
      {/* Brand Section */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
            <Ionicons name="chatbubble-ellipses" size={32} color={COLORS.primary}/>
        </View>
        <Text style={styles.appName}>ChitChat</Text>
        <Text style={styles.appName}>Friendly corner for quick chats</Text>
      </View>
    </View>
  )
}