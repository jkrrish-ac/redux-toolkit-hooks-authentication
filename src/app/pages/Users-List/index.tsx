import React , { useEffect } from 'react';
import { useAppDispatch , useAppSelector} from '../../hooks';
import { fetchUsers , selectUserLists } from './userSlice';
import { ColumnsType } from 'antd/es/table';
import { IUser } from './interface';
import { Table } from 'antd';

export const UsersListPage = () => {
    const dispatch = useAppDispatch();

    const usersList = useAppSelector(selectUserLists);

    const columns: ColumnsType<IUser> = [
        {
          key: '1',
          title: 'Name',
          dataIndex: 'name',
          ellipsis: true,
          fixed: "left",
        },
        {
            key: '2',
            title: 'Username',
            dataIndex: 'username',
            ellipsis: true,
        },
        {
            key: '3',
            title: 'Email',
            dataIndex: 'email',
            ellipsis: true,
        },
        {
            key: '4',
            title: 'Website',
            dataIndex: 'website',
            ellipsis: true,
        },
        {
            key: '5',
            title: 'Address',
            dataIndex: 'address',
            ellipsis: true,
            render: (text) => <span>{text.street}, {text.city} , {text.zipcode}</span>
        },
        {
            key: '6',
            title: 'Company',
            dataIndex: 'company',
            ellipsis: true,
            render: (text) => <span>{text.name}, {text.catchpharse}</span>
        }
    ]


    useEffect(() => {
        dispatch(fetchUsers());
      }, [dispatch]);

    return(
        <Table<IUser>
          loading={usersList.isLoadingUsers}
          dataSource = { usersList.userList}
          columns = {columns}
          rowKey="id"
        />

        
    )
}
