import { Oval } from 'react-loader-spinner';

type SpinnerProps = {
    height: string,
    width: string,
    color: string,
    visible: boolean
}

function Spinner({ height, width, color, visible }: SpinnerProps){

    return (
        <Oval
            height={height}
            width={width}
            color={color}
            visible={visible}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={4}
            strokeWidthSecondary={4}
        />
    )
}

export default Spinner;