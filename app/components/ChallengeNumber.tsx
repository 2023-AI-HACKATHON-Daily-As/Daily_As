import { Menu, Dropdown } from 'antd';
import React, { useState, useEffect } from 'react';
import { CaretDownFilled } from '@ant-design/icons';

interface MenuItem {
    key: string;
    label: string;
}

const items: MenuItem[] = [
    {
        key: '1',
        label: '1명',
    },
    {
        key: '2',
        label: '2명',
    },
    {
        key: '3',
        label: '3명',
    },
    {
        key: '4',
        label: '4명',
    },
    {
        key: '5',
        label: '5명',
    },
    {
        key: '6',
        label: '6명',
    },
    {
        key: '7',
        label: '7명',
    },
    {
        key: '8',
        label: '8명',
    },
    {
        key: '9',
        label: '9명',
    },
    {
        key: '10',
        label: '10명',
    }
];

const Private = () => {
    const [selectedKey, setSelectedKey] = useState<string>('1');
    const [visible, setVisible] = useState<boolean>(false);

    const handleMenuClick = (e: any) => {
        setSelectedKey(e.key);
        setVisible(false); // Close the dropdown after selecting an option
    };

    useEffect(() => {
    }, [selectedKey]);

    const selectedLabel = items.find(item => item.key === selectedKey)?.label || '1명';

    const menu = (
        <Menu onClick={handleMenuClick} selectedKeys={[selectedKey]}>
            {items.map(item => (
                <Menu.Item className='number' key={item.key}>{item.label}</Menu.Item>
            ))}
        </Menu>
    );

    return (
        <div className='daily-form-dropdown challenge'>
            <div className='daily-form-title'>
                <h2>참여자 수</h2>
            </div>
            <Dropdown className='daily-number' overlay={menu} placement="bottomLeft" trigger={['click']} visible={visible} onVisibleChange={setVisible}>
                <div className='dropdown-box' onClick={(e) => e.preventDefault()}>
                    {selectedLabel}
                    <CaretDownFilled />
                </div>
            </Dropdown>
        </div>
    );
};

export default Private;
