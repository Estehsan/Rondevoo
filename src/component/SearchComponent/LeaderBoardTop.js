import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme/theme';
import H2W from '../basic/H2W';
import HeadingW from '../basic/HeadingW';
import {Avatar, DataTable} from 'react-native-paper';

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
    paddingVertical: 30,
    alignContent: 'center',
  },
  Content: {backgroundColor: 'white', flex: 1, margin: 10, borderRadius: 10},
});
