import { Menu, Dropdown } from 'antd';
import React, { useState, useEffect } from 'react';
import { CaretDownFilled } from '@ant-design/icons';

interface MenuItem {
    key: string;
    label: string;
}

const items: MenuItem[] = [
    {
        key: 'false',
        label: '공개',
    },
    {
        key: 'true',
        label: '비공개',
    }
];

const Private = () => {
    const [selectedKey, setSelectedKey] = useState<string>('false');
    const [visible, setVisible] = useState<boolean>(false);

    const handleMenuClick = (e: any) => {
        setSelectedKey(e.key);
        setVisible(false); // Close the dropdown after selecting an option
    };

    useEffect(() => {
    }, [selectedKey]);

    const menu = (
        <Menu onClick={handleMenuClick} selectedKeys={[selectedKey]}>
            {items.map(item => (
                <Menu.Item key={item.key}>{item.label}</Menu.Item>
            ))}
        </Menu>
    );

    return (
        <div className='daily-form-dropdown challenge'>
            <div className='daily-form-title'>
                <h2>공개 여부</h2>
            </div>
            <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']} visible={visible} onVisibleChange={setVisible}>
                <div className='dropdown-box' onClick={(e) => e.preventDefault()}>
                    {selectedKey === 'false' ? '공개' : '비공개'}
                    <CaretDownFilled />
                </div>
            </Dropdown>
            <div className='daily-form-title'>
                <p>공개로 설정되어 있으면 다른 사람이 검색 및 참여가 가능해요. 친구들만 같이 참여를 원하시면 비공개로 선택해 주세요.</p>
            </div>
        </div>
    );
};

export default Private;
