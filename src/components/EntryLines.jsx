import React from 'react';

import { List } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';


function EntryLine({ entries, deleteEntry }) {
    return (
        <List
            itemLayout="horizontal"
            dataSource={entries}
            renderItem={(item, index) => (
                <List.Item
                    key={item.id}
                    actions={
                        [<span key="list-loadmore-edit"><EditFilled /></span>,
                        <span key="list-loadmore-more"><DeleteFilled onClick={()=> deleteEntry(item.id)}/></span>
                        ]
                    }
                >

                    <List.Item.Meta
                        title={item.description}
                    />
                    <div style={{color: item.isExpense? "red": "green"}}>{item.value}</div>
                </List.Item>
            )}
        />
    );
}

export default EntryLine;