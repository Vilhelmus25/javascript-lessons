document.querySelector('.register-form').addEventListener('submint', (ev) => {
    ev.preventDefault();            // ne küldje el, lelőjük az eseményt

    // Name: 5 char length, contains only letters and space.
    // const name = ev.target.querySelector('input[name=name]').value;
    // if (name !== 'Pisti') {
    //     alert('The name must be at least 5 chars and must contain letters.')
    // }
    const name = ev.target.querySelector('input[name=name]').value;
    // caret: ^altgr+3space, \w = szó karakterek (a-ű), \s = whitespace (tab.space)
    if (!/^[a-űA-Ű\s])

});