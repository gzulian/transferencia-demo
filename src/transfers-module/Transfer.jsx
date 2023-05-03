import React , { useState } from 'react';

const TransferComponent = (props) => {
    const [transfer, setTransfer] = useState({cuenta:'',destino:'',monto:0});

    const cuentas = [{cuenta:"123123",monto:500000},{cuenta:"219992",monto:20000}]
    const destinos = [{ nombre:"Juan Soto",cuenta:"66556"},{nombre:"Pedro leal",cuenta:"66652"}]

    const transferir = (e) => {
        e.preventDefault();

        if( transfer.cuenta == '' || transfer.destino == '' ||  transfer.monto == '' ){
            alert("incompleto");
            return false;
        }
        return true;
    }

    return (
        <form className="form" onSubmit={transferir}>
            <div className="form-group">
                <label>Seleccione cuenta</label>
                <select
                    className='form-control'
                     onChange={e => {
                        setTransfer({ ...transfer, cuenta: e.target.value });
                      }}
                     >
                    <option value=''>[Seleccione]</option>
                    {cuentas.map(c => <option key={c.id}>{c.cuenta}</option>)}
                </select>
                <small  className="form-text text-muted">
                    Monto disponible: $ {  cuentas.find( (c) => c.cuenta == transfer.cuenta )?.monto }
                </small>
            </div>
            <div className="form-group" >
                <label>Destinatario</label>
                <select className='form-control'
                   onChange={e => {
                    setTransfer({ ...transfer, destino: e.target.value });
                    }}>
                    <option value=''>[Seleccione]</option>
                    {destinos.map(c => <option key={c.id}>{c.nombre} | {c.cuenta}</option>)}
                </select>
            </div>
            <div className="form-group">
                <label>MONTO: </label>
                <input
                    className='form-control'
                    onChange={e => {
                        setTransfer({ ...transfer, monto: e.target.value });
                      }}
                 ></input>
            </div>
            <div className="form-group">
                <button className='btn btn-primary'>Transferir</button>
            </div>
        </form>

    )
}

export default TransferComponent;