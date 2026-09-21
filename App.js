import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";

const BACKGROUND = require("./assets/background.jpg");
const LOGO = require("./assets/logo.png");
const LOGO_SYMBOL = require("./assets/simboloLogo.png");

export default function App() {
  const [tela, setTela] = useState("inicio");

  function navegar(novaTela) {
    setTela(novaTela);
  }

  // =====================================================
  // COMPONENTE DE FUNDO
  // =====================================================

  function Fundo({ children }) {
    return (
      <ImageBackground
        source={BACKGROUND}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.backgroundOverlay}>
          {children}
        </View>
      </ImageBackground>
    );
  }

  // =====================================================
  // CABEÇALHO DAS TELAS INTERNAS
  // =====================================================

  function HeaderInterno({ titulo, subtitulo }) {
    return (
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Pressable
            style={styles.backButton}
            onPress={() => navegar("inicio")}
          >
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>

          <Image
            source={LOGO_SYMBOL}
            style={styles.headerLogo}
            resizeMode="contain"
          />

          <View style={styles.headerSpacer} />
        </View>

        <Text style={styles.pageTitle}>{titulo}</Text>

        {subtitulo && (
          <Text style={styles.pageSubtitle}>
            {subtitulo}
          </Text>
        )}
      </View>
    );
  }

  // =====================================================
  // TELA INICIAL
  // =====================================================

  if (tela === "inicio") {
    return (
      <SafeAreaView style={styles.container}>
        <Fundo>
          <View style={styles.home}>
            <View style={styles.homeLogoArea}>
              <Image
                source={LOGO}
                style={styles.homeLogo}
                resizeMode="contain"
              />
            </View>

            <View style={styles.homeButtons}>
              <Pressable
                style={styles.primaryButton}
                onPress={() => navegar("alertas")}
              >
                <Text style={styles.primaryButtonText}>
                  VER ALERTAS
                </Text>
              </Pressable>

              <Pressable
                style={styles.secondaryButton}
                onPress={() => navegar("admin")}
              >
                <Text style={styles.secondaryButtonText}>
                  GERENCIAR ALERTAS
                </Text>
              </Pressable>
            </View>
          </View>
        </Fundo>
      </SafeAreaView>
    );
  }

  // =====================================================
  // TELA DE ALERTAS
  // =====================================================

  if (tela === "alertas") {
    return (
      <SafeAreaView style={styles.container}>
        <Fundo>
          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
          >
            <HeaderInterno
              titulo="Alertas da cidade"
              subtitulo="Confira os avisos da sua região."
            />

            <View style={styles.filterBox}>
              <Text style={styles.filterLabel}>
                Seu bairro
              </Text>

              <Pressable style={styles.selectBox}>
                <Text style={styles.selectText}>
                  Centro
                </Text>

                <Text style={styles.selectArrow}>
                  ▼
                </Text>
              </Pressable>
            </View>

            <Text style={styles.sectionTitle}>
              Alertas recentes
            </Text>

            <View style={styles.alertCard}>
              <View style={styles.alertHeader}>
                <View
                  style={[
                    styles.priority,
                    styles.priorityHigh,
                  ]}
                >
                  <Text style={styles.priorityHighText}>
                    ALTA
                  </Text>
                </View>

                <Text style={styles.alertDate}>
                  20/09/2026
                </Text>
              </View>

              <Text style={styles.alertTitle}>
                Falta de abastecimento de água
              </Text>

              <Text style={styles.category}>
                Abastecimento de água
              </Text>

              <Text style={styles.alertDescription}>
                O fornecimento de água será interrompido
                temporariamente para manutenção da rede.
              </Text>

              <View style={styles.locationBox}>
                <Text style={styles.locationLabel}>
                  BAIRRO
                </Text>

                <Text style={styles.locationText}>
                  Centro
                </Text>
              </View>
            </View>

            <View style={styles.alertCard}>
              <View style={styles.alertHeader}>
                <View
                  style={[
                    styles.priority,
                    styles.priorityMedium,
                  ]}
                >
                  <Text style={styles.priorityMediumText}>
                    MÉDIA
                  </Text>
                </View>

                <Text style={styles.alertDate}>
                  21/09/2026
                </Text>
              </View>

              <Text style={styles.alertTitle}>
                Manutenção na rede pública
              </Text>

              <Text style={styles.category}>
                Obras e manutenção
              </Text>

              <Text style={styles.alertDescription}>
                Serviço de manutenção programado para
                a região.
              </Text>

              <View style={styles.locationBox}>
                <Text style={styles.locationLabel}>
                  BAIRRO
                </Text>

                <Text style={styles.locationText}>
                  Centro
                </Text>
              </View>
            </View>
          </ScrollView>
        </Fundo>
      </SafeAreaView>
    );
  }

  // =====================================================
  // TELA ADMINISTRATIVA
  // =====================================================

  if (tela === "admin") {
    return (
      <SafeAreaView style={styles.container}>
        <Fundo>
          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
          >
            <HeaderInterno
              titulo="Gerenciar alertas"
              subtitulo="Cadastre e gerencie os avisos da cidade."
            />

            <Pressable
              style={styles.primaryButton}
              onPress={() => navegar("novoAlerta")}
            >
              <Text style={styles.primaryButtonText}>
                + NOVO ALERTA
              </Text>
            </Pressable>

            <Text style={styles.sectionTitle}>
              Alertas cadastrados
            </Text>

            <View style={styles.adminCard}>
              <View style={styles.adminCardTop}>
                <View style={styles.adminInfoArea}>
                  <Text style={styles.adminAlertTitle}>
                    Falta de abastecimento
                  </Text>

                  <Text style={styles.adminInfo}>
                    Centro
                  </Text>

                  <View
                    style={[
                      styles.adminPriority,
                      styles.priorityHigh,
                    ]}
                  >
                    <Text style={styles.priorityHighText}>
                      ALTA
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.adminButtons}>
                <Pressable style={styles.editButton}>
                  <Text style={styles.editButtonText}>
                    EDITAR
                  </Text>
                </Pressable>

                <Pressable style={styles.deleteButton}>
                  <Text style={styles.deleteButtonText}>
                    EXCLUIR
                  </Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.adminCard}>
              <View style={styles.adminCardTop}>
                <View style={styles.adminInfoArea}>
                  <Text style={styles.adminAlertTitle}>
                    Manutenção da rede
                  </Text>

                  <Text style={styles.adminInfo}>
                    Vila São José
                  </Text>

                  <View
                    style={[
                      styles.adminPriority,
                      styles.priorityMedium,
                    ]}
                  >
                    <Text style={styles.priorityMediumText}>
                      MÉDIA
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.adminButtons}>
                <Pressable style={styles.editButton}>
                  <Text style={styles.editButtonText}>
                    EDITAR
                  </Text>
                </Pressable>

                <Pressable style={styles.deleteButton}>
                  <Text style={styles.deleteButtonText}>
                    EXCLUIR
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </Fundo>
      </SafeAreaView>
    );
  }

  // =====================================================
  // TELA NOVO ALERTA
  // =====================================================

  if (tela === "novoAlerta") {
    return (
      <SafeAreaView style={styles.container}>
        <Fundo>
          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
          >
            <HeaderInterno
              titulo="Novo alerta"
              subtitulo="Preencha as informações do aviso."
            />

            <View style={styles.formCard}>
              <Text style={styles.label}>
                Título
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Ex.: Falta de abastecimento"
                placeholderTextColor="#82918B"
              />

              <Text style={styles.label}>
                Categoria
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Ex.: Abastecimento de água"
                placeholderTextColor="#82918B"
              />

              <Text style={styles.label}>
                Descrição
              </Text>

              <TextInput
                style={[
                  styles.input,
                  styles.textArea,
                ]}
                placeholder="Descreva o que está acontecendo..."
                placeholderTextColor="#82918B"
                multiline
              />

              <Text style={styles.label}>
                Bairro
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Ex.: Centro"
                placeholderTextColor="#82918B"
              />

              <Text style={styles.label}>
                Prioridade
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Alta, média ou baixa"
                placeholderTextColor="#82918B"
              />

              <Text style={styles.label}>
                Data
              </Text>

              <TextInput
                style={styles.input}
                placeholder="DD/MM/AAAA"
                placeholderTextColor="#82918B"
              />

              <Pressable
                style={[
                  styles.primaryButton,
                  styles.formButton,
                ]}
                onPress={() => navegar("admin")}
              >
                <Text style={styles.primaryButtonText}>
                  CADASTRAR ALERTA
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </Fundo>
      </SafeAreaView>
    );
  }

  return null;
}

// =====================================================
// ESTILOS
// =====================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006239",
  },

  background: {
    flex: 1,
  },

  backgroundOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 38, 28, 0)",
  },

  // ===================================================
  // HOME
  // ===================================================

  home: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 28,
    paddingTop: 55,
    paddingBottom: 55,
  },

  homeLogoArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  homeLogo: {
    width: "100%",
    height: 440,
    maxWidth: 390,
  },

  homeButtons: {
    gap: 14,
  },

  primaryButton: {
    minHeight: 56,
    borderRadius: 14,
    backgroundColor: "#138253",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 5,
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  secondaryButton: {
    minHeight: 56,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
    backgroundColor: "rgba(255,255,255,0.10)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  secondaryButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  // ===================================================
  // CONTEÚDO
  // ===================================================

  content: {
    padding: 22,
    paddingBottom: 50,
  },

  // ===================================================
  // HEADER
  // ===================================================

  header: {
    marginBottom: 26,
  },

  headerTop: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255,255,255,0.12)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.30)",
    alignItems: "center",
    justifyContent: "center",
  },

  backButtonText: {
    color: "#FFFFFF",
    fontSize: 27,
    lineHeight: 28,
    marginTop: -2,
  },

  headerLogo: {
    width: 100,
    height: 100,
  },

  headerSpacer: {
    width: 42,
  },

  pageTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: 0.2,
  },

  pageSubtitle: {
    color: "rgba(255,255,255,0.78)",
    fontSize: 15,
    lineHeight: 21,
    marginTop: 6,
  },

  // ===================================================
  // FILTRO
  // ===================================================

  filterBox: {
    backgroundColor: "rgba(255,255,255,0.94)",
    borderRadius: 16,
    padding: 16,
    marginBottom: 4,
  },

  filterLabel: {
    color: "#173B32",
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  selectBox: {
    height: 50,
    backgroundColor: "#F5F8F6",
    borderWidth: 1,
    borderColor: "#D5E2DC",
    borderRadius: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  selectText: {
    color: "#263B35",
    fontSize: 15,
    fontWeight: "600",
  },

  selectArrow: {
    color: "#006239",
    fontSize: 11,
  },

  // ===================================================
  // SEÇÕES
  // ===================================================

  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#FFFFFF",
    marginTop: 28,
    marginBottom: 14,
  },

  // ===================================================
  // CARDS DE ALERTA
  // ===================================================

  alertCard: {
    backgroundColor: "rgba(255,255,255,0.96)",
    borderRadius: 17,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.75)",
  },

  alertHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 13,
  },

  priority: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "flex-start",
  },

  priorityHigh: {
    backgroundColor: "#FCE5E5",
  },

  priorityMedium: {
    backgroundColor: "#FFF1D6",
  },

  priorityHighText: {
    fontSize: 10,
    fontWeight: "900",
    color: "#A33F3F",
    letterSpacing: 0.4,
  },

  priorityMediumText: {
    fontSize: 10,
    fontWeight: "900",
    color: "#9A6B13",
    letterSpacing: 0.4,
  },

  alertDate: {
    color: "#7A8984",
    fontSize: 12,
    fontWeight: "600",
  },

  alertTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#173B32",
    lineHeight: 23,
  },

  category: {
    color: "#138253",
    fontSize: 13,
    fontWeight: "800",
    marginTop: 6,
  },

  alertDescription: {
    color: "#66746F",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 12,
  },

  locationBox: {
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#E5EBE8",
  },

  locationLabel: {
    color: "#8A9792",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 0.8,
  },

  locationText: {
    color: "#29443C",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 3,
  },

  // ===================================================
  // ADMINISTRAÇÃO
  // ===================================================

  adminCard: {
    backgroundColor: "rgba(255,255,255,0.96)",
    borderRadius: 17,
    padding: 17,
    marginBottom: 12,
  },

  adminCardTop: {
    flexDirection: "row",
  },

  adminInfoArea: {
    flex: 1,
  },

  adminAlertTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#173B32",
  },

  adminInfo: {
    color: "#71807B",
    marginTop: 5,
    fontSize: 13,
    fontWeight: "600",
  },

  adminPriority: {
    marginTop: 10,
    alignSelf: "flex-start",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  adminButtons: {
    flexDirection: "row",
    gap: 8,
    marginTop: 16,
  },

  editButton: {
    flex: 1,
    minHeight: 42,
    borderWidth: 1.3,
    borderColor: "#006239",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  editButtonText: {
    color: "#006239",
    fontSize: 12,
    fontWeight: "800",
  },

  deleteButton: {
    flex: 1,
    minHeight: 42,
    borderWidth: 1.3,
    borderColor: "#C94C4C",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  deleteButtonText: {
    color: "#C94C4C",
    fontSize: 12,
    fontWeight: "800",
  },

  // ===================================================
  // FORMULÁRIO
  // ===================================================

  formCard: {
    backgroundColor: "rgba(255,255,255,0.96)",
    borderRadius: 17,
    padding: 18,
  },

  label: {
    color: "#29443C",
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 8,
    marginTop: 15,
  },

  input: {
    backgroundColor: "#F5F8F6",
    borderWidth: 1,
    borderColor: "#D5E2DC",
    borderRadius: 10,
    minHeight: 52,
    paddingHorizontal: 15,
    fontSize: 15,
    color: "#263B35",
  },

  textArea: {
    height: 110,
    paddingTop: 14,
    textAlignVertical: "top",
  },

  formButton: {
    marginTop: 25,
  },
});
