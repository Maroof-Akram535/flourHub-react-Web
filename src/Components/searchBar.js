import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);
export default function SearchBar() {
    const onSearch = value => console.log(value);
    return (
        <div>
            <Search placeholder="input search text" onSearch={onSearch} style={{ borderRadius: "5px", width: 200 }} suffix={suffix} />
        </div>
    )
}
