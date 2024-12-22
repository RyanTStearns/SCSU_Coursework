/* -------  Ryan Stearns  -------- */
/* -------   00620126     -------- */
/* -----   Function List   ------- */



		/* Create function to execute data transfer to array receipt1 */
		function ar1 () {
			/* Check to see if user already has four items */
			if (m > 3) {
				alert("You already have four items on your receipt!");
				}
			else {
				/* Define variables for user inputted values */
				var g, h, z, u;
				g = document.getElementById('CodeBox').value;
				h = document.getElementById('QuantityBox').value;
				z = document.getElementById('ITotal').value;
				u = document.getElementById('IName').value;
				
				/* Check user inputted code and insert into array */
				receipt1[c][m] = parseFloat(g);
				/* Take value out of array and display in table */
				document.getElementById('r' + b).value = receipt1[c][m];
				/* Add to global variable for table cell switching */
				b += 1;
				/*  Check user inputted quantity and insert into array */
				receipt1[c][m] = parseFloat(h);
				document.getElementById('r' + b).value = receipt1[c][m];
				/*  Add to global variable for table cell switching */
				b += 1;
				/*  Get item name and insert into array */
				receipt1[c][m] = u;
				/*  Take value out of array and display in table */
				document.getElementById('r' + b).value = receipt1[c][m]; 
				/* Add to global variable for table cell switching */
				b += 1;
				/*  Take final item total and insert into array */
				receipt1[c][m] = parseFloat(z);
				/*  Take value out of array and display in table */
				document.getElementById('r' + b).value = receipt1[c][m]; 
				/*  Add to global variables for table cell switching and array */  
				b += 1;
				m += 1;
				}
			}
			
		/* Create function to execute data transfer to array receipt2 */
		function ar2 () {
			/* Check to see if user already has two items */
			if (c > 1) {
				alert("You already have two items on your receipt!");
				}
			else {
				var f, t, Tot, Name;
				f = document.getElementById('CodeBox').value;
				t = document.getElementById('QuantityBox').value;
				Tot = document.getElementById('ITotal').value;
				Name = document.getElementById('IName').value;
				
				/* Check user inputted code and insert into array */
				receipt2[q][n] = parseFloat(f);
				/* Take value out of array and display in table */
				document.getElementById('w' + k).value = receipt2[q][n];
				/* Add to global variable for table cell switching */
				k += 1;
				/*  Take final item total and insert into array */
				receipt2[q][n] = parseFloat(t);
				document.getElementById('w' + k).value = receipt2[q][n];
				/*  Add to global variables for table cell switching and array */ 
				k += 1;
				/* Get item name and insert into array */
				receipt2[q][n] = Name;
				/* Take value out of array and display in table */
				document.getElementById('w' + k).value = receipt2[q][n];
				/* Add to global variable for table cell switching */
				k += 1;
				/* Take final item total and insert into array */
				receipt2[q][n] = parseFloat(Tot);
				/* Take value out of array and display in table */
				document.getElementById('w' + k).value = receipt2[q][n];
				/* Add to global variables for table cell switching and array */
				k += 1;
				n += 1;
				}
			}
			
		/* Create function to disable buttons */
		function disable() {
			document.getElementById('AR1').disabled = true;
			document.getElementById('Update').disabled = true;
			document.getElementById('AR2').disabled = true;
			document.getElementById('CodeBox').disabled = true;
			document.getElementById('QuantityBox').disabled = true;
			}	
			
		/* Create function to enable buttons */
		function enable() {
			document.getElementById('AR1').disabled = false;
			document.getElementById('Update').disabled = false;
			document.getElementById('AR2').disabled = false;
			document.getElementById('CodeBox').disabled = false;
			document.getElementById('QuantityBox').disabled = false;
			}	
			
		/* Create function to enable Add to Receipt buttons */
		function enabr() {
			document.getElementById('AR1').disabled = false;
			document.getElementById('AR2').disabled = false;
			}
			
		/* Create function to enable Add to Receipt buttons */
		function disabr() {
			document.getElementById('AR1').disabled = true;
			document.getElementById('AR2').disabled = true;
			}
			
		/* Create function to reset Input Form */
			function resetIF() {
				document.getElementById('data_entry').reset();
				}
				
		/* Create function to reset Receipt1 */
			function resetR1() {
				document.getElementById('receipt_1').reset();
				/* Reset global variable to 0 */
				b = 0; 
				m = 0;
				}

		/* Create function to reset Receipt2 */
			function resetR2() {
				document.getElementById('receipt_2').reset();
				/* Reset global variable to 0 */
				k = 0; 
				n = 0;
				}
				
		/* Create function to update linked data */
		function update () {
			/* Define variable for item subtotal */
			var isub; 
			/* Apply values to item */
			var itemsub, ccode;
			ccode = parseFloat(document.getElementById('CodeBox').value);
			
			/* Check user input for errors */
			if ( ccode > 1128 ) {
					alert("You have entered an invalid code");
					document.getElementById('CodeBox').focus();
					document.getElementById('CodeBox').select();
					}
			else if ( ccode < 1111 ) {
					alert("You have entered an invalid code");
					document.getElementById('CodeBox').focus();
					document.getElementById('CodeBox').select();
					}
			/* If item is equal to, pull values from array and fill tables (18 INSTANCES) */
			else if ( ccode == 1111 ) {
					document.getElementById('IName').value = items[2][1];
					document.getElementById('PItem').value = items[2][2];
					document.getElementById('Taxable').value = items[2][3];
					isub = parseFloat(document.getElementById('QuantityBox').value * document.getElementById('PItem').value);
					document.getElementById('ISub').value = isub.toFixed(2);
					document.getElementById('TSub').value = 0.00;
					itemsub = parseFloat(document.getElementById('ISub').value) + parseFloat(document.getElementById('TSub').value);
					document.getElementById('ITotal').value = parseFloat(itemsub);
					}
			else if ( ccode == 1112 ) {
					document.getElementById('IName').value = items[3][1];
					document.getElementById('PItem').value = items[3][2];
					document.getElementById('Taxable').value = items[3][3];
					isub = parseFloat(document.getElementById('QuantityBox').value * document.getElementById('PItem').value);
					document.getElementById('ISub').value = isub.toFixed(2);
					document.getElementById('TSub').value = 0.00;
					itemsub = parseFloat(document.getElementById('ISub').value) + parseFloat(document.getElementById('TSub').value);
					document.getElementById('ITotal').value = parseFloat(itemsub);
					}
			else if ( ccode == 1113 ) {
					document.getElementById('IName').value = items[4][1];
					document.getElementById('PItem').value = items[4][2];
					document.getElementById('Taxable').value = items[4][3];
					isub = parseFloat(document.getElementById('QuantityBox').value * document.getElementById('PItem').value);
					document.getElementById('ISub').value = isub.toFixed(2);
					tsub = parseFloat(document.getElementById('ISub').value * .065);
					document.getElementById('TSub').value = tsub.toFixed(2);
					itemsub = parseFloat(document.getElementById('ISub').value) + parseFloat(document.getElementById('TSub').value);
					document.getElementById('ITotal').value = parseFloat(itemsub);
					}
			else if ( ccode == 1114 ) {
					document.getElementById('IName').value = items[5][1];
					document.getElementById('PItem').value = items[5][2];
					document.getElementById('Taxable').value = items[5][3];
					isub = parseFloat(document.getElementById('QuantityBox').value * document.getElementById('PItem').value);
					document.getElementById('ISub').value = isub.toFixed(2);
					tsub = parseFloat(document.getElementById('ISub').value * .065);
					document.getElementById('TSub').value = tsub.toFixed(2);
					itemsub = parseFloat(document.getElementById('ISub').value) + parseFloat(document.getElementById('TSub').value);
					document.getElementById('ITotal').value = parseFloat(itemsub);
					}		
			else if ( ccode == 1115 ) {
					document.getElementById('IName').value = items[6][1];
					document.getElementById('PItem').value = items[6][2];
					document.getElementById('Taxable').value = items[6][3];
					isub = parseFloat(document.getElementById('QuantityBox').value * document.getElementById('PItem').value);
					document.getElementById('ISub').value = isub.toFixed(2);
					tsub = parseFloat(document.getElementById('ISub').value * .065);
					document.getElementById('TSub').value = tsub.toFixed(2);
					itemsub = parseFloat(document.getElementById('ISub').value) + parseFloat(document.getElementById('TSub').value);
					document.getElementById('ITotal').value = parseFloat(itemsub);
					}
			else if ( ccode == 1116 ) {
					document.getElementById('IName').value = items[7][1];
					document.getElementById('PItem').value = items[7][2];
					document.getElementById('Taxable').value = items[7][3];
					isub = parseFloat(document.getElementById('QuantityBox').value * document.getElementById('PItem').value);
					document.getElementById('ISub').value = isub.toFixed(2);
					tsub = parseFloat(document.getElementById('ISub').value * .065);
					document.getElementById('TSub').value = tsub.toFixed(2);
					itemsub = parseFloat(document.getElementById('ISub').value) + parseFloat(document.getElementById('TSub').value);
					document.getElementById('ITotal').value = parseFloat(itemsub);
					}
			else if ( ccode == 1117 ) {
					document.getElementById('IName').value = items[8][1];
					document.getElementById('PItem').value = items[8][2];
					document.getElementById('Taxable').value = items[8][3];
					isub = parseFloat(document.getElementById('QuantityBox').value * document.getElementById('PItem').value);
					document.getElementById('ISub').value = isub.toFixed(2);
					document.getElementById('TSub').value = 0.00;
					itemsub = parseFloat(document.getElementById('ISub').value) + parseFloat(document.getElementById('TSub').value);
					document.getElementById('ITotal').value = parseFloat(itemsub);
					}
			else if ( ccode == 1118 ) {
					document.getElementById('IName').value = items[9][1];
					document.getElementById('PItem').value = items[9][2];
					document.getElementById('Taxable').value = items[9][3];
					isub = parseFloat(document.getElementById('QuantityBox').value * document.getElementById('PItem').value);
					document.getElementById('ISub').value = isub.toFixed(2);
					document.getElementById('TSub').value = 0.00;
					itemsub = parseFloat(document.getElementById('ISub').value) + parseFloat(document.getElementById('TSub').value);
					document.getElementById('ITotal').value = parseFloat(itemsub);					
					}
			else if ( ccode == 1119 ) {
					document.getElementById('IName').value = items[10][1];
					document.getElementById('PItem').value = items[10][2];
					document.getElementById('Taxable').value = items[10][3];
					isub = parseFloat(document.getElementById('QuantityBox').value * document.getElementById('PItem').value);
					document.getElementById('ISub').value = isub.toFixed(2);
					document.getElementById('TSub').value = 0.00;
					itemsub = parseFloat(document.getElementById('ISub').value) + parseFloat(document.getElementById('TSub').value);
					document.getElementById('ITotal').value = parseFloat(itemsub);
					}
			else if ( ccode == 1120 ) {
					document.getElementById('IName').value = items[11][1];
					document.getElementById('PItem').value = items[11][2];
					document.getElementById('Taxable').value = items[11][3];
					isub = parseFloat(document.getElementById('QuantityBox').value * document.getElementById('PItem').value);
					document.getElementById('ISub').value = isub.toFixed(2);
					tsub = parseFloat(document.getElementById('ISub').value * .065);
					document.getElementById('TSub').value = tsub.toFixed(2);
					itemsub = parseFloat(document.getElementById('ISub').value) + parseFloat(document.getElementById('TSub').value);
					document.getElementById('ITotal').value = parseFloat(itemsub);
					}
			else if ( ccode == 1121 ) {
					document.getElementById('IName').value = items[12][1];
					document.getElementById('PItem').value = items[12][2];
					document.getElementById('Taxable').value = items[12][3];
					isub = parseFloat(document.getElementById('QuantityBox').value * document.getElementById('PItem').value);
					document.getElementById('ISub').value = isub.toFixed(2);
					tsub = parseFloat(document.getElementById('ISub').value * .065);
					document.getElementById('TSub').value = tsub.toFixed(2);
					itemsub = parseFloat(document.getElementById('ISub').value) + parseFloat(document.getElementById('TSub').value);
					document.getElementById('ITotal').value = parseFloat(itemsub);
					}
			else if ( ccode == 1122 ) {
					document.getElementById('IName').value = items[13][1];
					document.getElementById('PItem').value = items[13][2];
					document.getElementById('Taxable').value = items[13][3];
					isub = parseFloat(document.getElementById('QuantityBox').value * document.getElementById('PItem').value);
					document.getElementById('ISub').value = isub.toFixed(2);
					tsub = parseFloat(document.getElementById('ISub').value * .065);
					document.getElementById('TSub').value = tsub.toFixed(2);
					itemsub = parseFloat(document.getElementById('ISub').value) + parseFloat(document.getElementById('TSub').value);
					document.getElementById('ITotal').value = parseFloat(itemsub);	
					}
			else if ( ccode == 1123 ) {
					document.getElementById('IName').value = items[14][1];
					document.getElementById('PItem').value = items[14][2];
					document.getElementById('Taxable').value = items[14][3];
					isub = parseFloat(document.getElementById('QuantityBox').value * document.getElementById('PItem').value);
					document.getElementById('ISub').value = isub.toFixed(2);
					document.getElementById('TSub').value = 0.00;
					itemsub = parseFloat(document.getElementById('ISub').value) + parseFloat(document.getElementById('TSub').value);
					document.getElementById('ITotal').value = parseFloat(itemsub);
					}
			else if ( ccode == 1124 ) {
					document.getElementById('IName').value = items[15][1];
					document.getElementById('PItem').value = items[15][2];
					document.getElementById('Taxable').value = items[15][3];
					isub = parseFloat(document.getElementById('QuantityBox').value * document.getElementById('PItem').value);
					document.getElementById('ISub').value = isub.toFixed(2);
					tsub = parseFloat(document.getElementById('ISub').value * .065);
					document.getElementById('TSub').value = tsub.toFixed(2);
					itemsub = parseFloat(document.getElementById('ISub').value) + parseFloat(document.getElementById('TSub').value);
					document.getElementById('ITotal').value = parseFloat(itemsub);	
					}
			else if ( ccode == 1125 ) {
					document.getElementById('IName').value = items[16][1];
					document.getElementById('PItem').value = items[16][2];
					document.getElementById('Taxable').value = items[16][3];
					isub = parseFloat(document.getElementById('QuantityBox').value * document.getElementById('PItem').value);
					document.getElementById('ISub').value = isub.toFixed(2);
					tsub = parseFloat(document.getElementById('ISub').value * .065);
					document.getElementById('TSub').value = tsub.toFixed(2);
					itemsub = parseFloat(document.getElementById('ISub').value) + parseFloat(document.getElementById('TSub').value);
					document.getElementById('ITotal').value = parseFloat(itemsub);	
					}
			else if ( ccode == 1126 ) {
					document.getElementById('IName').value = items[17][1];
					document.getElementById('PItem').value = items[17][2];
					document.getElementById('Taxable').value = items[17][3];
					isub = parseFloat(document.getElementById('QuantityBox').value * document.getElementById('PItem').value);
					document.getElementById('ISub').value = isub.toFixed(2);
					tsub = parseFloat(document.getElementById('ISub').value * .065);
					document.getElementById('TSub').value = tsub.toFixed(2);
					itemsub = parseFloat(document.getElementById('ISub').value) + parseFloat(document.getElementById('TSub').value);
					document.getElementById('ITotal').value = parseFloat(itemsub);	
					}
			else if ( ccode == 1127 ) {
					document.getElementById('IName').value = items[18][1];
					document.getElementById('PItem').value = items[18][2];
					document.getElementById('Taxable').value = items[18][3];
					isub = parseFloat(document.getElementById('QuantityBox').value * document.getElementById('PItem').value);
					document.getElementById('ISub').value = isub.toFixed(2);
					tsub = parseFloat(document.getElementById('ISub').value * .065);
					document.getElementById('TSub').value = tsub.toFixed(2);
					itemsub = parseFloat(document.getElementById('ISub').value) + parseFloat(document.getElementById('TSub').value);
					document.getElementById('ITotal').value = parseFloat(itemsub);	
					}
			else if ( ccode == 1128 ) {
					document.getElementById('IName').value = items[19][1];
					document.getElementById('PItem').value = items[19][2];
					document.getElementById('Taxable').value = items[19][3];
					isub = parseFloat(document.getElementById('QuantityBox').value * document.getElementById('PItem').value);
					document.getElementById('ISub').value = isub.toFixed(2);
					tsub = parseFloat(document.getElementById('ISub').value * .065);
					document.getElementById('TSub').value = tsub.toFixed(2);
					itemsub = parseFloat(document.getElementById('ISub').value) + parseFloat(document.getElementById('TSub').value);
					document.getElementById('ITotal').value = parseFloat(itemsub);	
					}
			}