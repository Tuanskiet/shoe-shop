import { useState } from 'react';
import { SvgUtils } from '../../../../utils/SvgUtils';
import { Button, Dropdown, MenuProps, Space } from 'antd';

const FilterBar = () => {
    const [viewMode, setViewMode] = useState('grid');

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
    };

    const sizes = {
        items: [
            {
                label: '43',
                key: '1',
            },
            {
                label: '42',
                key: '2',
            },
            {
                label: '41',
                key: '3',
            },
            {
                label: '40',
                key: '4',
            },
        ],
        onClick: handleMenuClick,
    };

    return (
        <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between mb-4">
            {/* Filters */}
            <div className="flex items-center gap-4">
                {/* Category */}
                <div className="flex items-center gap-2">
                    <span className="font-medium">Danh mục</span>
                    <select className="border rounded px-3 py-1 bg-white cursor-pointer">
                        <option>Giày thể thao</option>
                        <option>Sandal</option>
                        <option>Hunter</option>
                    </select>
                </div>

                {/* Size */}
                <div className="flex items-center gap-2">
                    <span className="font-medium">Size</span>
                    <select className="border rounded px-3 py-1 bg-white cursor-pointer">
                        <option>43</option>
                        <option>42</option>
                        <option>41</option>
                    </select>
                    {/* <Dropdown menu={sizes}>
                        <Button>
                            <Space>43</Space>
                            {SvgUtils.arrowDown}
                        </Button>
                    </Dropdown> */}
                </div>

                {/* Color */}
                <div className="flex items-center gap-2">
                    <span className="font-medium">Màu sắc</span>
                    <select className="border rounded px-3 py-1 bg-white cursor-pointer">
                        <option>Xanh</option>
                        <option>Đỏ</option>
                        <option>Xám</option>
                    </select>
                </div>
            </div>

            {/* View Toggle Buttons */}
            <div className="flex gap-2">
                <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white'}`}
                >
                    {SvgUtils.grid}
                </button>
                <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white'}`}
                >
                    {SvgUtils.list}
                </button>
            </div>
        </div>
    );
};

export default FilterBar;
