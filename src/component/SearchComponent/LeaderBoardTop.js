import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme/theme';
import {H2W, H3, HeadingW} from '../basic';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Avatar, DataTable, Surface} from 'react-native-paper';

const optionsPerPage = [2, 3, 4];

const LeaderBoardTop = () => {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  return (
    <View style={styles.main}>
      <View style={styles.Top}>
        <HeadingW>Top Growing Pages</HeadingW>
        <View style={styles.SubFilter}>
          <H2W>
            Today
            <Entypo name="chevron-down" size={20} />
          </H2W>
          <View style={styles.surface}>
            <Ionicons name="filter" size={20} />

            <Text>Filter</Text>
            <Entypo name="chevron-down" size={20} />
          </View>
        </View>
      </View>
      <View style={styles.Content}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Rank</DataTable.Title>
            <DataTable.Title>Page Name</DataTable.Title>
            <DataTable.Title numeric>Members</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell>1</DataTable.Cell>
            <DataTable.Cell>Alpha</DataTable.Cell>
            <DataTable.Cell numeric>10</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>3</DataTable.Cell>
            <DataTable.Cell>Beta</DataTable.Cell>
            <DataTable.Cell numeric>30</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>4</DataTable.Cell>
            <DataTable.Cell>Gappa</DataTable.Cell>
            <DataTable.Cell numeric>30</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>5</DataTable.Cell>
            <DataTable.Cell>halo</DataTable.Cell>
            <DataTable.Cell numeric>30</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>5</DataTable.Cell>
            <DataTable.Cell>halo</DataTable.Cell>
            <DataTable.Cell numeric>30</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>5</DataTable.Cell>
            <DataTable.Cell>halo</DataTable.Cell>
            <DataTable.Cell numeric>30</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>5</DataTable.Cell>
            <DataTable.Cell>halo</DataTable.Cell>
            <DataTable.Cell numeric>30</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>5</DataTable.Cell>
            <DataTable.Cell>halo</DataTable.Cell>
            <DataTable.Cell numeric>30</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Pagination
            page={page}
            numberOfPages={3}
            onPageChange={page => setPage(page)}
            label="1-2 of 6"
            optionsPerPage={optionsPerPage}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            showFastPagination
            optionsLabel={'Rows per page'}
          />
        </DataTable>
      </View>
    </View>
  );
};

export default LeaderBoardTop;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  Top: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    alignContent: 'center',
  },
  Content: {backgroundColor: 'white', flex: 1, margin: 10, borderRadius: 10},
  SubFilter: {
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    justifyContent: 'space-between',
  },
  surface: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 5,
    flexDirection: 'row',
  },
});
