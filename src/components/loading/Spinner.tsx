import { GrDebian } from 'react-icons/gr';

function Spinner({ size = 40 }: { size: number }) {
    return (<><GrDebian size={size} color='green' className='animate-spin' /></>)
}


export default Spinner;