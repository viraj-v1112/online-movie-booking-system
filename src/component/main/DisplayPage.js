import React from 'react';
import { Page, Text,  Document, StyleSheet , PDFDownloadLink , Font , Image } from '@react-pdf/renderer';

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  });

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
      },
      title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Oswald'
      },
      subtitle: {
        fontSize: 18,
        margin: 5,
        fontFamily: 'Oswald'
      },
      text: {
        margin: 2,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
      },
      header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
      },
});

const MyDoc = () => (
    <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        Online Movie Booking System
      </Text>
      <Text style={styles.title}>Movie Ticket</Text>
      <Text style={styles.subtitle}>Movie : </Text> 
      <Text style={styles.text}>{localStorage.getItem("Movie")}</Text>
      <Text style={styles.subtitle}>Theater : </Text> 
      <Text style={styles.text}>{localStorage.getItem("TheaterName")}</Text>
      <Text style={styles.subtitle}>Day : </Text> 
      <Text style={styles.text}>{localStorage.getItem("Day")}</Text>
      <Text style={styles.subtitle}>Date : </Text> 
      <Text style={styles.text}>{localStorage.getItem("Date")}</Text>
      <Text style={styles.subtitle}>Time : </Text> 
      <Text style={styles.text}>{localStorage.getItem("Time")}</Text>
      <Text style={styles.subtitle}>Seat : </Text> 
      <Text style={styles.text}>{localStorage.getItem("seatID")}</Text>
      <Text style={styles.subtitle}>Price : </Text> 
      <Text style={styles.text}>{localStorage.getItem("Price")}</Text>
    </Page>
  </Document>
  )

// Create Document Component
const DisplayPage = () => (
    <div>
        <div>
            <PDFDownloadLink document={<MyDoc />} fileName="ticket.pdf">
                {({ blob, url, loading, error }) => (
                    loading ? 'Loading document...' : 'Download Ticket now!')}
            </PDFDownloadLink>
        </div>
    </div>
);

export default DisplayPage;